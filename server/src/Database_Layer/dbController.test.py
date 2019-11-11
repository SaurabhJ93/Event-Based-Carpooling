import unittest
from unittest.mock import patch
import sys
# sys.path.append("Users⁩/⁨saurabhjaiswal⁩/⁨Desktop⁩/SSDI-Project⁩/test⁩/SSDI_project⁩/server⁩/src⁩")
# from src.Models import UserData
from Models import UserData
from dbController import DBController;        

class TestDBController(unittest.TestCase):
    def setUp(self):
        with patch('DBController.UserData.userData') as userData:
            userData = {
                'data': 'ABC'
            }

    def test_getUser(self):
        with patch(DBController.cursor) as cursor:
            response = cursor.execute('SELECT `RIDE_ID`, `USERNAME`, `STATUS` FROM RIDES_REQUESTED WHERE RIDE_ID = ').return_value = {Data: 'ABC'}
            print('response', response)


if __name__ == '__main__':
    unittest.main()