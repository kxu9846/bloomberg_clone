from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField,
    ListField,
    ReferenceField,
    StringField,
    IntField,
)


class Image(Document):
    meta = {"collection": "image"}
    url: StringField()