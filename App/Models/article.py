from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField,
    ListField,
    ReferenceField,
    StringField,
    IntField,
)


class Article(Document):
    meta = {"collection": "article"}
    title: StringField()
    author: StringField()
    published_date: DateTimeField()
    image_ids: ListField()
    body: StringField()
