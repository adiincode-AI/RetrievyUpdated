from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer ,String



Base = declarative_base()

class Items(Base):

    __tablename__ = "items"

    id= Column(Integer,primary_key = True, index = True)
    title = Column(String, nullable=False)
    status = Column(String, nullable=False)
    location = Column(String, nullable=False)
    contact_details = Column(String, nullable=False)
    description = Column(String)
