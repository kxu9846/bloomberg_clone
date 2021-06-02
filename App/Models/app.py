
from flask import Flask
from flask_graphql import GraphQLView
from schema import schema
from database import init_db
from pdb import set_trace as bp


app = Flask(__name__)

default_query = '''
{
  users {
    id
    username
  }
}
'''.strip()

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True)
)

if __name__ == '__main__':

  init_db()
  app.run()