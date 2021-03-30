from application.resources.teammate import TeamMate
from application.resources.teammates import TeamMates
from application import app, api

api.add_resource(TeamMates,'/teammates')
api.add_resource(TeamMate,'/teammates/<todo_id>')

if __name__ == '__main__':
    app.run(debug=True)