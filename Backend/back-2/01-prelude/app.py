from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
mates = [
    {'patrick@epitech.eu': {'nom': '...' , 'prenom': '...' , 'ecole': 'EPITECH'}} ,
    {'viken@epitech.eu': {'nom': '...' , 'prenom': '...' , 'ecole': 'EPITECH'}} ,
    {'benoit@epitech.eu': {'nom': '...' , 'prenom': '...' , 'ecole': 'emlyon'}} ,
    {'jean@epitech.eu': {'nom': '...' , 'prenom': '...' , 'ecole': 'emlyon'}}
]

class TeamMates(Resource):
    def get(self):
        return mates

api.add_resource(TeamMates, '/')

if __name__ == '__main__':
    app.run(debug=True)