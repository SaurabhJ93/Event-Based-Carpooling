from flask import Flask, jsonify, request, json
from flask_cors import CORS
import Seat_Geek_API as SGE

app = Flask(__name__)
CORS(app) #Need this to allow requests between client and server for Cross-origin resource sharing

@app.route('/index', methods=['GET']) #handles route of home page in backend send required data to react
def index():
    events = SGE.Seat_Geek_Api()
    alleventsdata = events.getallEvents() 
    return alleventsdata

if __name__ == '__main__':
    app.run(host="localhost", debug=True, port=5000)