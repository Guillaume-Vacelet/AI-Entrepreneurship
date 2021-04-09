from application import app, api
from application.resources.teammates import TeamMates

api.add_resource(TeamMates, '/teammates')

if __name__ == '__main__':
    app.run(debug=True)