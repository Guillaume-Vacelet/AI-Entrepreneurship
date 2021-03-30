from flask import session
from flask_socketio import emit, join_room, leave_room
from .. import socketio

@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)


@socketio.on('joined', namespace='/chat')
def joined(message):
    """Sent by clients when they enter a room.
    A status message is broadcast to all people in the room."""
    room = session.get('room')
    join_room(room)
    emit('status', {'msg': session.get('name') + ' has entered the room.'}, room=room)