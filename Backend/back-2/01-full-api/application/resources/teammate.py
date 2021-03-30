from flask_restful import reqparse, Resource
from teammates import mates

parser = reqparse.RequestParser()
parser.add_argument('last_name')
parser.add_argument('first_name')
parser.add_argument('school')

class TeamMate(Resource):
  def get(self, login):
    abort_if_doesnt_exist(login, mates)
    return mates[login]
  
  def delete(self, login):
    abort_if_doesnt_exist(login, mates)
    del mates[login]
    return ''

  def put(self, login):
    abort_if_doesnt_exist(login, mates)
    args = parser.parse_args()