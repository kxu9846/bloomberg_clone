import json
import csv
from jsonpath import jsonpath
from mongoengine import connect
import os

from Models.user import User
from Models.ticker import Ticker

DATABASE = "bloomberg_db"
PASSWORD = os.environ.get("MONGODB_PASSWORD")

client = connect(
    host = 'mongodb+srv://admin:En9RjAKmIdvS888L@bloomberg.r7eiw.mongodb.net/bloomberg_db?ssl=true&ssl_cert_reqs=CERT_NONE')

ticker_file = 'App/ticker_symbols.csv'

def seed_ticker_symbols():
    with open(ticker_file, newline='') as csvfile:
        ticker_reader = csv.reader(csvfile)
        next(ticker_reader, None)
        for row in ticker_reader:
            symbol = row[0]
            name = row[1]
            name = Ticker(name = name, symbol = symbol)
            name.save()

def init_db():
    # seed_ticker_symbols()
    # print(client.ticker.drop())
    pass
    # joe = User(username='joe', password='password', article_ids=[], ticker_ids=[])
    # joe.save()
    # hank = User(username='hank', password='password', article_ids=[], ticker_ids=[])
    # hank.save()
    # kitty = User(username='kitty', password='password', article_ids=[], ticker_ids=[])
    # kitty.save()
    # erich = User(username='erich', password='password', article_ids=[], ticker_ids=[])
    # erich.save()

# init_db()

