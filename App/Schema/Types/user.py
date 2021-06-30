from graphene import ID, String, InputObjectType, Field
from graphene_mongo import MongoengineObjectType
from Models.user import User as UserModel

# Unions: Combines Multiple Object Types into a single Object Type 
# Interfaces: cat Interfaces Animal, Cat also contains fields from Animal

class User(MongoengineObjectType):
    class Meta:
        model = UserModel
    
    # nested queries i.e count = Int()

    # count = graphene.Int()
    # all_persons = graphene.List(YourPersonType)

    # def resolve_count(self, info, **kwargs):
    #     # assumed that django used on backend
    #     return Person.objects.count()

    # def resolve_all_persons(self, info, **kwargs):
    #     return Person.objects.all()

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

