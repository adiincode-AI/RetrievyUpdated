from fastapi import FastAPI,Depends
from models import Items
from database import SessionLocal, engine
import database_models
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
# from models import Item

app = FastAPI()
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
database_models.Base.metadata.create_all(bind=engine)



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/items")
def get_all_product(db: Session = Depends(get_db)):
    db_items = db.query(database_models.Items).all()
    return db_items

@app.get("/items/{type}")
def get_item_by_type(type = str,db: Session = Depends(get_db)):
    db_item = db.query(database_models.Items).filter(database_models.Items.status == type).all()
    return db_item

@app.post("/items")
def add_item(item: Items,db: Session = Depends(get_db)):
    db.add(database_models.Items(**item.model_dump()))
    db.commit()
    return item

# @app.get("/Items/{title}")
# def get_item_by_name(title = str,db: Session = Depends(get_db)):
#     db_name = db.query(database_models.Items).filter(database_models.Items.title == title).all()
#     return db_name

@app.get("/search")
def search_items(title: str,db: Session = Depends(get_db)):
    item = db.query(database_models.Items).filter(database_models.Items.title.contains(title)).all()
    return item


# @app.delete("/items")
# def delete_item(id: int,db: Session = Depends(get_db)):

#     db_item =  db.query(database_models.Items).filter(database_models.Items.id == id).first()
#     if db_item:
#         db.delete(db_item)
#         db.commit()
#     else:
#         return False