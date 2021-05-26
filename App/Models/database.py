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

print(client)


# def init_db():

#     with open("smb.json", "r") as file:
#         data = json.loads(file.read())
#     game = Game(name=data[0].get("table_data").get("Game"))
#     game.save()

#     for row in data:
#         enemies = []
#         for elem in row["enemies"]:
#             amount = elem["amount"] if isinstance(elem["amount"], int) else 1
#             enemy = Enemy(name=elem["name"], amount=amount)
#             enemy.save()
#             enemies.append(enemy)

#         powerups = []
#         for elem in row["statistics"]:
#             powerup = Powerup(name=elem["name"], amount=elem["amount"])
#             powerup.save()
#             powerups.append(powerup)

#         level = Level(
#             description=row.get("description"),
#             name=jsonpath(row, "table_data.World-Level")[0],
#             world=jsonpath(row, "table_data.World")[0],
#             time_limit=jsonpath(row, "table_data.Time limit")[0].split(" ")[0],
#             boss=row.get("table_data").get("Boss"),
#             enemies=enemies,
#             game=game,
#             powerups=powerups,
#         )

#         level.save()


init_db()