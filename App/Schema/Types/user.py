from graphene import ID, String, InputObjectType, Field
from graphene_mongo import MongoengineObjectType
from App.Models.user import User as UserModel

class User(MongoengineObjectType):
    class Meta:
        model = UserModel
    
    # nested queries i.e count = Int()

    def resolve_count(parent, info, first_name):
        return 

class UserInput(InputObjectType):
    first_name = String()
    last_name = String()
    username = String()
    email = String()
    password = String()

    class Meta:
        model = UserModel

