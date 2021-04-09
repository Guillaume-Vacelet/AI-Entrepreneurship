from flask_restful import reqparse, Resource
from application.resources.TeamMateList import mates
from application.common.util import abort_if_doesnt_exist

parser = reqparse.RequestParser()
parser.add_argument('login')
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
    last_name = args['last_name'] if args['last_name'] else mates[login]['last_name']
    first_name = args['first_name'] if args['first_name'] else mates[login]['first_name']
    school = args['school'] if args['school'] else mates[login]['school']
    mates[login] = {
      "last_name": last_name,
      "first_name": first_name,
      "school": school,
    }
    return mates[login]