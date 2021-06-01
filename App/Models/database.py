import json
from jsonpath import jsonpath
from mongoengine import connect
import os

from models import User
#  Article, Ticker, Images

DATABASE = "bloomberg_db"
PASSWORD = os.environ.get("MONGODB_PASSWORD")

client = connect(
    host = 'mongodb+srv://admin:En9RjAKmIdvS888L@bloomberg.r7eiw.mongodb.net/bloomberg_db?retryWrites=true&w=majority')
# client.drop_database(DATABASE)
def init_db():
    joe = User(username='joe', password='password', article_ids=[], ticker_ids=[])
    joe.save()
    hank = User(username='hank', password='password', article_ids=[], ticker_ids=[])
    hank.save()
    kitty = User(username='kitty', password='password', article_ids=[], ticker_ids=[])
    kitty.save()
    erich = User(username='erich', password='password', article_ids=[], ticker_ids=[])
    erich.save()

init_db()