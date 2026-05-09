from fastapi import FastAPI, Depends
from models import ItemCreate, ItemResponse, UserCreate, UserLogin
from database import SessionLocal, engine
import database_models
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from models import ItemCreate, ItemResponse
from auth import hash_password, verify_password, create_access_token

app = FastAPI()

database_models.Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(database_models.User).filter(
        database_models.User.email == user.email
    ).first()

    if existing_user:
        return {"error": "Email already exits"}

    hashed_password = hash_password(user.password)

    new_user = database_models.User(
        username=user.username,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()

    return {"message": "User created successfully"}

@app.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(database_models.User).filter(
        database_models.User.email == user.email
    ).first()

    if not db_user:
        return {"error": "Invalid credentials"}

    if not verify_password(user.password, db_user.password):
        return {"error": "Invalid credentials"}
    token = create_access_token(
        data={
            "user_id": db_user.id,
            "email": db_user.email,
            "user_name":db_user.username
        }
    )
    return {
        "access_token": token,
        "token_type": "bearer"
    }


@app.get("/items", response_model=list[ItemResponse])
def get_items(status: str | None = None, db: Session = Depends(get_db)):

    query = db.query(database_models.Items)

    if status:
        query = query.filter(database_models.Items.status == status)

    return query.all()


@app.post("/items", response_model=ItemResponse)
def add_item(item: ItemCreate, db: Session = Depends(get_db)):

    db_item = database_models.Items(**item.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return db_item


@app.get("/search", response_model=list[ItemResponse])
def search_item(title: str, db: Session = Depends(get_db)):

    items = db.query(database_models.Items).filter(
        database_models.Items.title.contains(title)
    ).all()

    return items

# @app.get("/search")
# def search_items(title: str,db: Session = Depends(get_db)):
#     item = db.query(database_models.Items).filter(database_models.Items.title.contains(title)).all()
#     return item


# @app.delete("/items")
# def delete_item(id: int,db: Session = Depends(get_db)):

#     db_item =  db.query(database_models.Items).filter(database_models.Items.id == id).first()
#     if db_item:
#         db.delete(db_item)
#         db.commit()
#     else:
#         return False
