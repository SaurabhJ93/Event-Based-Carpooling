# import unittest
# from unittest.mock import patch
# import sys
# from flask import Flask
# from flask_mysqldb import MySQL
# from Database_Layer.dbController import DBController
# import DB_config


# app = Flask('__main__')
# app.config['TESTING'] = True
# app.config["MYSQL_HOST"] = DB_config.MYSQL_HOST
# app.config["MYSQL_USER"] = DB_config.MYSQL_USER
# app.config["MYSQL_PASSWORD"] = DB_config.MYSQL_PASSWORD
# app.config["MYSQL_DB"] = DB_config.MYSQL_DB_TEST
# app.config["CORS_HEADERS"] = DB_config.CORS_HEADERS
# app.config["MYSQL_CURSORCLASS"] = DB_config.MYSQL_CURSORCLASS


import MySQLdb
import unittest
import DB_config
from Database_Layer.dbController import DBController

class TestDBController(unittest.TestCase):

    def setUp(self): 
        self.db = MySQLdb.connect(host=DB_config.MYSQL_HOST,    # your host, usually localhost
                     user=DB_config.MYSQL_USER,         # your username
                     passwd=DB_config.MYSQL_PASSWORD,  # your password
                     db=DB_config.MYSQL_DB_TEST)
        self.db.autocommit = "false"
        self.cur = self.db.cursor()
        self.controller = DBController(self.cur, self.db)
        self.username = 'rakgunti26'
        self.ride_id = 181
        self.event_id = '5096273'
        self.status = 'accepted'

    def tearDown(self):
        self.db.close()
    

    def test_saveRequest(self):
        self.controller.saveRequest(self.ride_id, self.event_id, self.username, self.status)
        self.cur.execute(""" SELECT RIDE_ID, EVENT_ID, USERNAME, STATUS FROM RIDES_REQUESTED WHERE RIDE_ID=%s AND EVENT_ID=%s AND USERNAME=%s""", (self.ride_id, self.event_id, self.username))
        result = self.cur.fetchall()[0]
        self.assertEqual(result[0], self.ride_id)
        self.assertEqual(result[1], self.event_id)
        self.assertEqual(result[2], self.username)
        self.assertEqual(result[3], self.status)
        self.cur.execute(""" DELETE FROM RIDES_REQUESTED WHERE RIDE_ID=%s AND EVENT_ID=%s AND USERNAME=%s""", (self.ride_id, self.event_id, self.username), )
        self.db.commit()


    #  @patch('Seat_Geek_API.requests.get')
    # def test_home(self, mock_get):
    #     raise_for_status = Mock()        
    #     mock_get.return_value.raise_for_status= raise_for_status
    #     mock_get.return_value = self.sampleResponse
    #     response = self.app.get(BASE_URL + "/index")
    #     data = json.loads(response.get_data())
    #     print('checking response code. is: ', response.status_code)
    #     mock_get.assert_called_once()
    #     self.assertEqual(response.status_code, 200)  # Testing if endpoint is hitting


if __name__ == '__main__':
    unittest.main()