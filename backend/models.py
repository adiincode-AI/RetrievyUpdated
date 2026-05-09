from pydantic import BaseModel
from typing import Optional

class Items(BaseModel):
    id: Optional[int] = None
    title : str
    status : str
    location : str
    contact_details : str
    description : str

