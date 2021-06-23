from App.database import DATABASE
import graphene
from graphene_mongo import MongoengineObjectType
# from models import User as UserModel
from Models.user import User as UserModel
from Models.ticker import Ticker as TickerModel
# from models import Article as ArticleModel
# from models import Ticker as TickerModel
# from models import Image as ImageModel
from pdb import set_trace as bp
import json
from mongoengine import connect

client = connect(
    host = 'mongodb+srv://admin:En9RjAKmIdvS888L@bloomberg.r7eiw.mongodb.net/bloomberg_db?ssl=true&ssl_cert_reqs=CERT_NONE')

class User(MongoengineObjectType):
    class Meta:
        model = UserModel
       
# class Article(MongoengineObjectType):
#     class Meta:
#         model = ArticleModel

class Ticker(MongoengineObjectType):
    class Meta:
        model = TickerModel

# class Image(MongoengineObjectType):
#     class Meta:
#         model = ImageModel

class Query(graphene.ObjectType):
    users = graphene.List(User)
    tickers = graphene.List(Ticker)

    def resolve_users(self, info):
        return list(UserModel.objects.all())
    
    def resolve_tickers(self, info):
        return list(TickerModel.objects.all())
    # articles = graphene.List(Article)
    # tickers = graphene.List(Ticker)
    # images = graphene.List(Image)

class Mutation(graphene.Mutation):
    class DeleteTicker:
        def mutate(self, info):
            tickers = graphene.List(Ticker)   
            tickers.delete()

schema = graphene.Schema(query=Query, mutation=Mutation)

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
# print(json.dumps(res.data)) was 

# Query.resolve_users()