from flask import Flask, jsonify, request, json
from flask_cors import CORS
from flask_mysqldb import MySQL

import Seat_Geek_API as SGE
from Database_Layer.dbController import DBController
import DB_config

app = Flask(__name__)
CORS(app) #Need this to allow requests between client and server for Cross-origin resource sharing

app.config['MYSQL_HOST'] = DB_config.MYSQL_HOST
app.config['MYSQL_USER'] = DB_config.MYSQL_USER
app.config['MYSQL_PASSWORD'] = DB_config.MYSQL_PASSWORD
app.config['MYSQL_DB'] = DB_config.MYSQL_DB
mysql = MySQL(app)

@app.route('/index', methods=['GET']) #handles route of home page in backend send required data to react
def index():
    events = SGE.Seat_Geek_Api()
    eventsdata = events.getallEvents()
    return eventsdata

@app.route('/getusers/<userid>', methods=['GET'])
def getUsers(userid):
    cursor = mysql.connection.cursor()
    controller = DBController(cursor)
    response = controller.getUser(userid)

    print('db op', response)
    return (str(response))

@app.route('/event/<eventId>', methods=['GET']) #handles route of Event page in backend send required data to react
def event(eventId):
    event = SGE.Seat_Geek_Api()
    eventdata = event.getEvent(eventId)
    return eventdata


if __name__ == '__main__':
    app.run(host="localhost", debug=True, port=5000)
