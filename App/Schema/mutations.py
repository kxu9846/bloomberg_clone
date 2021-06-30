from graphene import Mutation, String, Field, Boolean
from Schema.Types.user import User as UserType, UserInput as UserInputType
from Models.user import User as UserModel

class CreateUserMutation(Mutation):
    class Arguments:
        user_data = UserInputType(required= True)
    
    user = Field(UserType)
    ok = Boolean()

    def mutate(root, info, user_data = None):
        user = UserModel(
            first_name=user_data.first_name,
            last_name=user_data.last_name,
            username=user_data.username,
            email=user_data.email,
            password=user_data.password,
        )
        user.save()
        ok = True

        return CreateUserMutation(user = user, ok = ok)
    