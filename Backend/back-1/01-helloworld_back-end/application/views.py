from . import app
from flask import render_template, redirect, url_for, session, escape, request

from application.core.form import LoginForm

@app.route('/')
def home():
  if 'username' in session:
    return 'Logged in as %s' % escape(session['username'])
  # return render_template('hello.html')
  return redirect('/login')

@app.route('/login', methods=["GET"])
def login():
  form = LoginForm()

  if form.validate_on_submit():
    return redirect(url_for('home'))
  return render_template('login.html')

@app.route('/register')
def register():
  return render_template('register.html')

@app.route('/about')
def about():
  return render_template('about.html')