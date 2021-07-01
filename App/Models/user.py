from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField,
    ListField,
    ReferenceField,
    StringField,
    EmailField,
    ObjectIdField
)
class User(Document):
    meta = {"collection": "user"}
    _id = ObjectIdField()
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    username = StringField(required=True, unique=True, min_length=6, max_length=32)
    email = EmailField(required=True, unique=True)
    password = StringField(required=True, min_length=8, max_length=32)
    created_at = DateTimeField(required=True, default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
    # article_ids = ListField()
    # ticker_ids = ListField()


# search_text
# sum
# update, update_one
# where
# with_id(object_id)
# count
# average
# first
# only
# insert
