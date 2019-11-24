from flask import Flask, jsonify, request, json, Response, render_template
from flask_cors import CORS
from flask_mysqldb import MySQL
from flask import abort
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)

import Seat_Geek_API as SGE
from Database_Layer.dbController import DBController
import DB_config, hashlib

app = Flask(__name__)

# CORS(app, resources={r"/*": {"origins": "*"}})
CORS(
    app
)  # Need this to allow requests between client and server for Cross-origin resource sharing
app.config["MYSQL_HOST"] = DB_config.MYSQL_HOST
app.config["MYSQL_USER"] = DB_config.MYSQL_USER
app.config["MYSQL_PASSWORD"] = DB_config.MYSQL_PASSWORD
app.config["MYSQL_DB"] = DB_config.MYSQL_DB
app.config["CORS_HEADERS"] = DB_config.CORS_HEADERS
app.config['MYSQL_CURSORCLASS'] = DB_config.MYSQL_CURSORCLASS
app.config['JWT_SECRET_KEY'] = DB_config.JWT_SECRET_KEY
mysql = MySQL(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


@app.route("/index", methods=["GET"])  # handles route of home page in backend send required data to react
def index():
    events = SGE.Seat_Geek_Api()
    print()
    if request.args:
        filterValue = ((request.args.get('filterValue')).split('%20'))[0]
        searchValue = request.args.get('searchValue')
        print('filterValue is', filterValue, 'searchValue is', searchValue)
        if filterValue == 'City':
            eventsdata = events.getByVenue(searchValue)
        elif filterValue == 'Date':
            eventsdata = events.getByDate(searchValue)
        elif filterValue == 'Performer':
            eventsdata = events.getByPerformer(searchValue.replace(' ', '-'))
        elif filterValue == 'No Filter' and searchValue !="":
            eventsdata = events.getByQuery(searchValue.replace(' ', '+'))
        else:
            eventsdata = events.getallEvents()            
        
    else:
        print('No filter arguments found')
        eventsdata = events.getallEvents()
    return eventsdata


@app.route("/getusers/<userid>", methods=["GET"])
def getUsers(userid):
    cursor = mysql.connection.cursor()
    controller = DBController(cursor, mysql)
    response = controller.getUser(userid)

    print("db op", response)
    return str(response)


@app.route(
    "/event/<eventId>", methods=["GET"]
)  # handles route of Event page in backend send required data to react
def event(eventId):
    event = SGE.Seat_Geek_Api()
    eventdata = event.getEvent(eventId)
    return eventdata


@app.route("/signup", methods=["POST"])  # handles route of signup page
def signup():
    try:
        if request.method == "POST":
            print("Signup is hit!!")
            data = request.get_json(silent=True)
            print("Received data is", request.get_json())
            cursor = mysql.connection.cursor()
            controller = DBController(cursor, mysql)
            response = controller.enterUser(data)

            if response == "Success":
                returnData = {"response": response}
                print("Sending resposne", returnData)
                return returnData
            elif response == "Email already present. Try a new email-id":
                returnData = {"response": response}
                print("Sending resposne", returnData)
                return {"response": response}
            else:
                print("error is:", response)
                (abort(500, {"response": response}))

    except Exception as e:
        print("error:", e)
        return e


@app.route("/saveRequest", methods=["GET", "POST"])
def save_request():
    data = request.get_json(silent=True)
    RideID = data.get("rideId")
    eventID = data.get("eventId")
    userID = data.get("userId")
    status = "pending"
    # print(RideID, eventID, userID, status)
    cursor = mysql.connection.cursor()
    controller = DBController(cursor, mysql)
    # controller.saveRequest("124", "1", "ageldartp", "pending")
    controller.saveRequest(RideID, eventID, userID, status)
    mysql.connection.commit()
    Response = app.response_class()
    return Response


@app.route(
    "/event/rides/<eventId>", methods=["GET"]
)  # handles route of Event page in backend send required data to react
def rides(eventId):
    eventId = 4704993  # hardcoded as we have data for this few events only
    cursor = mysql.connection.cursor()
    controller = DBController(cursor, mysql)
    print(request.args.get("userId"))
    if (
        "userId" in request.args and request.args.get("userId") != ""
    ):  # condition to check if userId is sent in request
        response = controller.getrides_username(
            eventId, request.args.get("userId")
        )  # sending offered rides data without his own rides
    else:
        response = controller.getrides_wo_username(
            eventId
        )  # sending all offered rides data for any given event
    return response
	

@app.route('/users/login', methods=['POST'])
def login():
    cur = mysql.connection.cursor()
    email = request.get_json()['email']
    password = request.get_json()['password'].encode('utf-8')
    result = ""
	
    cur.execute("SELECT * FROM USER where email_id = '" + str(email) + "'")
    rv = cur.fetchone()

    if rv['PASSWORD'] == (hashlib.md5(password)).hexdigest(): #hashing password and validating
        result = create_access_token(identity = {'first_name': rv['FIRST_NAME'],'last_name': rv['LAST_NAME'],'email': rv['EMAIL_ID']})
    else:
        result = jsonify({"error":"Invalid username and password"})
    
    return result


if __name__ == "__main__":
    app.run(host="localhost", debug=True, port=5000)
