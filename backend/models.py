from pydantic import BaseModel, EmailStr
from typing import Optional


class ItemCreate(BaseModel):
    id: Optional[int] = None
    title : str
    status : str
    location : str
    contact_details : str
    description : str
    
class UserCreate(BaseModel):
    username:str
    email:EmailStr
    password:str

class UserLogin(BaseModel):
    email:EmailStr
    password:str

class ItemResponse(ItemCreate):
    id:int

    class Config:
        from_attributes = True




