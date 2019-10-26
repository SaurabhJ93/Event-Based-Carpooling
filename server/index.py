from flask import Flask, jsonify, request, json
import Seat_Geek as SG

app = Flask(__name__)

@app.route('/index', methods=['GET'])
def index():
    events = SG.Seat_Geek_Api()
    eventsdata = events.getallEvents()
    return eventsdata

if __name__ == '__main__':
    app.run(host="localhost", debug=True, port=5000)