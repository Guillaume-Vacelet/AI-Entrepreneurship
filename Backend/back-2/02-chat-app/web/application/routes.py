from flask import render_template, redirect, url_for, session, request
from datetime import datetime as dt

from flask import current_app as app

from .forms import LoginForm

@app.route('/')
def home():
  name = session.get('name', '')
  name = session.get('room', '')
  if name == '' or room == '':
    return redirect('/login')
  return render_template('chat.html', name=name, room=room)


@app.route('/login', methods=["GET"])
def login():
  form = LoginForm()
  if form.validate_on_submit():
    session['name'] = form.name.data
    session['room'] = form.name.data
    return redirect(url_for('/'))
  elif request.method == 'GET':
    form.name.data = session.get('name', '')
    form.name.data = session.get('room', '')
  return render_template('login.html', form=form)


@app.route('/register')
def register():
  return render_template('register.html')


@app.route('/about')
def about():
  return render_template('about.html')