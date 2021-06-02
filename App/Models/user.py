from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField,
    ListField,
    ReferenceField,
    StringField,
    IntField,
)

class User(Document):
    meta = {"collection": "user"}
    username = StringField(required=True)
    password = StringField(required=True)
    article_ids = ListField()
    ticker_ids = ListField()

