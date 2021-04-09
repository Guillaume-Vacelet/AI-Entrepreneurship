from flask_restful import reqparse, Resource
from application.common.util import abort_if_doesnt_exist


mates = {
    'patrick@epitech.eu': {'last_name': '...' , 'first_name': '...' , 'school': 'EPITECH'},
    'viken@epitech.eu': {'last_name': '...' , 'first_name': '...' , 'school': 'EPITECH'},
    'benoit@epitech.eu': {'last_name': '...' , 'first_name': '...' , 'school': 'emlyon'},
    'jean@epitech.eu': {'last_name': '...' , 'first_name': '...' , 'school': 'emlyon'}
}

parser = reqparse.RequestParser()
parser.add_argument('login')
parser.add_argument('last_name')
parser.add_argument('first_name')
parser.add_argument('school')

class TeamMateList(Resource):
    def get(self):
        return mates
    
    def post(self):
        args = parser.parse_args()
        new_mate = {
            'last_name': args['last_name'], 
            'first_name': args['first_name'], 
            'school': args['school']
        }
        mates[args['login']] = new_mate
        return new_mate