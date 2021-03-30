from flask import Flask
from flask_socketio import SocketIO

socketio = SocketIO()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    # Register things here
    # Creating an explicit application context to allow
    # easy access to current_app.config, etc
    with app.app_context():
        from . import routes
        # from . import models
        
        socketio.init_app(app)
        return app
