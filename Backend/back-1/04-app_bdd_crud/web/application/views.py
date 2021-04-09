from flask import make_response, render_template, redirect, url_for, session, escape, request
from datetime import datetime as dt
from flask import current_app as app
from .models import db, Product


@app.route('/')
def home():
  # if 'username' in session:
  #   return 'Logged in as %s' % escape(session['username'])
  # return render_template('hello.html')
  return redirect('/login')


@app.route('/login', methods=["GET"])
def login():
  # form = LoginForm()

  # if form.validate_on_submit():
  #   return redirect(url_for('home'))
  return render_template('login.html')


@app.route('/register')
def register():
  return render_template('register.html')


@app.route('/about')
def about():
  return render_template('about.html')


@app.route('/products/create', methods=['GET'])
def create_product():
  label = request.args.get('label')
  quantity = request.args.get('qqty')
  if (not label) or (not quantity):
    return make_response(f"Product creation failed.")
  is_product_existing = Product.query.filter(Product.label == label).first()
  if is_product_existing:
      return make_response(f'[{label}] product already created!')
  new_product = Product(label=label, quantity=quantity, creation_date=dt.now())
  db.session.add(new_product)
  db.session.commit()
  return make_response(f"[{new_product.label}] successfully created!")


@app.route('/products/read')
def show_products():
  products = Product.query.all()
  return render_template('products.html', products=products, title="Show Products")


@app.route('/products/update', methods=['GET', 'PUT'])
def update_product():
  product_label = request.args.get('product_label')
  new_label = request.args.get('new_label')
  new_quantity = request.args.get('new_qqty')
  if not product_label and (not new_label and not new_quantity):
    return make_response(f"Product update failed.")
  
  product = Product.query.filter(Product.label == product_label).first()
  if not product:
    return make_response(f"Product not found.")
  if new_label:
    product.label = new_label
  if new_quantity:
    product.quantity = new_quantity
  db.session.commit()
  return make_response(f"[{product.label}] successfully updated!")


@app.route('/products/delete', methods=['GET', 'DELETE'])
def delete_product():
  product_label = request.args.get('product_label')
  if not product_label:
    return make_response(f"Product not found.")
  Product.query.filter(Product.label == product_label).delete()
  db.session.commit()
  return make_response(f"[{product_label}] successfully deleted!")