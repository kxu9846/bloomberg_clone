import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from models import User as UserModel
from models import Article as ArticleModel
from models import Ticker as TickerModel
from models import Image as ImageModel

class User(MongoengineObjectType):
    class Meta:
        model = UserModel
       
class Article(MongoengineObjectType):
    class Meta:
        model = ArticleModel

class Ticker(MongoengineObjectType):
    class Meta:
        model = TickerModel

class Image(MongoengineObjectType):
    class Meta:
        model = ImageModel

class Query(graphene.ObjectType):

    users = graphene.Field(User)
    # articles = graphene.List(Article)
    # tickers = graphene.List(Ticker)
    # images = graphene.List(Image)

    # def resolve_users(self, info,firstname):
    #     return list(UserModel.objects.all(firstname))

    # def resolve_users(self, args, info):
    #     print(User(username='bob'))

schema=graphene.Schema(query=Query, types= [UserModel])
# Query.resolve_users()