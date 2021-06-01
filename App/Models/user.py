from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField,
    ListField,
    ReferenceField,
    StringField,
    IntField,
)
from mongoengine import connect


class User(Document):
    meta = {"collection": "user"}
    username = StringField()
    password = StringField()
    article_ids = ListField()
    ticker_ids = ListField()

client = connect(
    host = 'mongodb+srv://admin:En9RjAKmIdvS888L@bloomberg.r7eiw.mongodb.net/bloomberg_db?retryWrites=true&w=majority')

for user in User.objects:
    print(user.username)