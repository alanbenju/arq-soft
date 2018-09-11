from flask import Flask
import time
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/timeout')
def timeout():
    time.sleep(10)
    return 'Timeout'