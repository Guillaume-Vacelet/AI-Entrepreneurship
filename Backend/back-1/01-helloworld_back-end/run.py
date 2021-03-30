from application import app
import config

app.config.from_object(config.Test)

if __name__ == '__main__':
  app.run()