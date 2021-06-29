import json
import graphene
from graphene_mongo import MongoengineObjectType
from App.Models.user import User as UserModel
# from models import Article as ArticleModel
# from models import Ticker as TickerModel
# from models import Image as ImageModel
from mongoengine import connect


class User(MongoengineObjectType):
    class Meta:
        model = UserModel
       
# class Article(MongoengineObjectType):
#     class Meta:
#         model = ArticleModel

# class Ticker(MongoengineObjectType):
#     class Meta:
#         model = TickerModel

# class Image(MongoengineObjectType):
#     class Meta:
#         model = ImageModel

class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        return list(UserModel.objects.all())
    # articles = graphene.List(Article)
    # tickers = graphene.List(Ticker)
    # images = graphene.List(Image)

schema = graphene.Schema(query=Query)

# res = schema.execute(
#     '''
#         {
#             users {
#                 username
#             }
#         }
#     '''
# )

# print(UserModel.objects)
# print(res.errors)
# print(json.dumps(res.data))

# Query.resolve_users()