from flask_wtf import Form
from wtforms.fields import StringField, SubmitField
from wtforms.validators import Required

class LoginForm(Form):
  """Accepts a name and a room."""
  name = StringField('Name', validators=[Required()])
  room = StringField('Room', validators=[Required()])
  submit = SubmitField('Enter Chatroom')