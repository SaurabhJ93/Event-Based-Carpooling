from flask import Flask, jsonify, request, json
from flask_cors import CORS
from flask_mysqldb import MySQL

import Seat_Geek_API as SGE
from Database_Layer.dbController import DBController
app = Flask(__name__)
CORS(app) #Need this to allow requests between client and server for Cross-origin resource sharing

app.config['MYSQL_HOST'] = 'fall19-ssdi-project-group5-db.cz4afuqpuil9.us-east-2.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'Project_root'
app.config['MYSQL_PASSWORD'] = 'Frank3nst3In_18'
app.config['MYSQL_DB'] = 'EVENT_BASED_CARPOOLING'
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


if __name__ == '__main__':
    app.run(host="localhost", debug=True, port=5000)
