import unittest
from unittest.mock import patch
import sys
from flask import Flask
from flask_mysqldb import MySQL
from Database_Layer.dbController import DBController
import DB_config

app = Flask(__name__)
app.config["MYSQL_HOST"] = DB_config.MYSQL_HOST
app.config["MYSQL_USER"] = DB_config.MYSQL_USER
app.config["MYSQL_PASSWORD"] = DB_config.MYSQL_PASSWORD
app.config["MYSQL_DB"] = DB_config.MYSQL_DB_TEST


class TestDBController(unittest.TestCase):
    def test_getUser(self):
        mysql = MySQL(app)
        cursor = mysql.connection.cursor()
        controller = DBController(cursor, mysql)
        response = controller.getUser("cbirdfield2")
        print('response', response)

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