import os

class Test (object):
  PORT = '5000'
  DEBUG = True
  HOST = '0.0.0.0'
  SECRET_KEY = os.environ.get('SECRET_KEY') or 'Back-1'
  SERVER_NAME = os.environ.get('SERVER_NAME') or ':'.join([HOST, PORT])