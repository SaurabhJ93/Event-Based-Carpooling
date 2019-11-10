from flask import Flask, jsonify, request, json
from flask_cors import CORS
from flask_mysqldb import MySQL
from flask import abort

import Seat_Geek_API as SGE
from Database_Layer.dbController import DBController
import DB_config

app = Flask(__name__)
CORS(app) #Need this to allow requests between client and server for Cross-origin resource sharing

app.config['MYSQL_HOST'] = DB_config.MYSQL_HOST
app.config['MYSQL_USER'] = DB_config.MYSQL_USER
app.config['MYSQL_PASSWORD'] = DB_config.MYSQL_PASSWORD
app.config['MYSQL_DB'] = DB_config.MYSQL_DB
app.config['CORS_HEADERS'] = 'Content-Type'
mysql = MySQL(app)

@app.route('/index', methods=['GET']) #handles route of home page in backend send required data to react
def index():
    events = SGE.Seat_Geek_Api()
    eventsdata = events.getallEvents()
    return eventsdata

@app.route('/getusers/<userid>', methods=['GET'])
def getUsers(userid):
    cursor = mysql.connection.cursor()
    controller = DBController(cursor, mysql)
    response = controller.getUser(userid)

    print('db op', response)
    return (str(response))

@app.route('/event/<eventId>', methods=['GET']) #handles route of Event page in backend send required data to react
def event(eventId):
    event = SGE.Seat_Geek_Api()
    eventdata = event.getEvent(eventId)
    return eventdata

@app.route('/signup', methods=['POST']) #handles route of signup page
def signup():
    try:
        if request.method == 'POST':
            print('Signup is hit!!')
            data = request.get_json(silent=True)
            print('Received data is', request.get_json())
            cursor = mysql.connection.cursor()
            controller = DBController(cursor, mysql)
            response = controller.enterUser(data)

            if response == 'Success':
                returnData = {'response': response}
                print('Sending resposne', returnData)
                return(returnData)
            elif response == 'Email already present. Try a new email-id':
                returnData = {'response': response}
                print('Sending resposne', returnData)
                return({'response': response})
            else:
                print('error is:', response)
                (abort(500, {"response":response}))

    except Exception as e:
        print('error:', e)
        return(e)       

if __name__ == '__main__':
    app.run(host="localhost", debug=True, port=5000)
