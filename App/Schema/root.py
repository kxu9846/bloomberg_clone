from graphene import ObjectType, Field, Schema, ID, String
from App.Schema.mutations import CreateUserMutation
from App.Schema.Types.user import User as UserType
from App.Models.user import User as UserModel
import json
from mongoengine import connect

class Mutation(ObjectType):
    create_user = CreateUserMutation.Field()

class Query(ObjectType):
    get_user_by_first_name = Field(UserType, first_name = String())

    def resolve_get_user_by_first_name(parent, info, first_name):
        return UserModel.objects(first_name=first_name).first()

client = connect(
    host = 'mongodb+srv://admin:En9RjAKmIdvS888L@bloomberg.r7eiw.mongodb.net/bloomberg_db?ssl=true&ssl_cert_reqs=CERT_NONE')

schema = Schema(query = Query, mutation = Mutation, types = [UserType])

createUserString = '''
        mutation createUserMutation {
            createUser(userData: {
                    firstName: "Joe",
                    lastName: "Bama",
                    username: "Joe100",
                    email: "JoeBama100@yahoo.com",
                    password: "apple123"
                }) {
                    user {
                        firstName,
                        lastName,
                        username,
                        email,
                        password
                    }
                ok
            }
        }
    '''

getUserString = '''
    query {
        getUserByFirstName(firstName: "Hank") {
            Id,
            firstName,
            lastName,
            username,
        }
    }
'''
res = schema.execute(getUserString)
print(res.errors) if res.errors else print(json.dumps(res.data))