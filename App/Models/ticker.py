from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField,
    ListField,
    ReferenceField,
    StringField,
    IntField,
)


class Ticker(Document):
    meta = {"collection": "ticker"}
    name = StringField()
    symbol = StringField()