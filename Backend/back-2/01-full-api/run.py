from application.resources.TeamMateList import TeamMateList
from application.resources.TeamMate import TeamMate
from application import app, api

api.add_resource(TeamMateList,'/teammates')
api.add_resource(TeamMate,'/teammates/<login>')

if __name__ == '__main__':
    app.run(debug=True)