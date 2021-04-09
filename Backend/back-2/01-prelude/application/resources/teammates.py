from flask_restful import Resource

mates = [
    {'patrick@epitech.eu': {'nom': '...' , 'prenom': '...' , 'ecole': 'EPITECH'}} ,
    {'viken@epitech.eu': {'nom': '...' , 'prenom': '...' , 'ecole': 'EPITECH'}} ,
    {'benoit@epitech.eu': {'nom': '...' , 'prenom': '...' , 'ecole': 'emlyon'}} ,
    {'jean@epitech.eu': {'nom': '...' , 'prenom': '...' , 'ecole': 'emlyon'}}
]

class TeamMates(Resource):
    def get(self):
        return mates
