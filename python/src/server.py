import json
import os
import time

import flask
from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

product_type = os.environ.get('API_PRODUCT_TYPE', 'employment')


@app.context_processor
def inject_product_type():
    return dict(
        server_url=flask.request.url_root,
    )


@app.route('/')
def index():
    """Just render example with bridge.js"""
    if product_type == 'income':
        return render_template('income.html')
    elif product_type == 'admin':
        return render_template('admin.html')
    else:
        return render_template('employment.html')

if __name__ == '__main__':
    app.debug = True
    app.run()
