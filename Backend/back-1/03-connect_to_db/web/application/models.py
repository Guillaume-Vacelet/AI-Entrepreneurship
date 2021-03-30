from . import db

class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    label = db.Column(db.String(64), index=False, unique=False, nullable=False)
    quantity = db.Column(db.Integer, index=False, unique=False, nullable=False)
    creation_date = db.Column(db.DateTime, index=False, unique=False, nullable=False)

    def __repr__ (self):
        return '<Product {}>'.format(self.label)