# Flask endpoint test cases
import unittest
from flask import Flask
from index import app
from unittest.mock import patch
import json
from Seat_Geek_API import Seat_Geek_Api
from Database_Layer.dbController import DBController
from unittest.mock import MagicMock

BASE_URL = "http://127.0.0.1:5000"
eventId = {"eventId": "5097856"}  # Hardcoded eventID to test the event page
user = {"username": "ageldartp"}
sga = Seat_Geek_Api()
dbc = DBController


class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    # Tests the home page endpoint function - if the response is return
    @patch("Seat_Geek_API.requests.get")
    def test_home(self, mock_get):
        mock_get.return_value.status_code = 200
        response = sga.getallEvents()
        print("Get all event data: ", response)
        self.assertIsNotNone(response)

    # Tests the event page endpoint function - if the response is return
    @patch("Seat_Geek_API.requests.get")
    def test_eventData(self, mock_get):
        mock_get.return_value.ok = True
        response = sga.getEvent(eventId)
        self.assertIsNotNone(response)
        self.assertIn("status", response)

    # Tests the offered rides data endpoint - data is returning and correct data is present
    # @patch("Seat_Geek_API.requests.get")
    # def test_rides(self):
    #     mock_get.return_value.status_code = 200
    #     dbc.getrides_username = MagicMock(return_value=ridesdata)
    #     print("Get user data: ", response)
    #     self.assertIsNotNone(response)

    # Tests the insert request in database endpoint - data is getting saved
    def test_saveRequest(self):
        # Test data is hitting the aws server directly, need to make a dummy db
        Testdata = {
            "rideId": "125",
            "eventId": "1",
            "userId": "testuser",
            "status": "testpending",
        }
        response = self.app.post(
            BASE_URL + "/saveRequest",
            data=json.dumps(Testdata),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

    def signup(self, email, password, firstName, lastName, phoneNumber):
        testData = {
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber": phoneNumber,
        }
        print("Testing signup.....data is", testData)
        return self.app.post(
            "/signup", data=json.dumps(testData), content_type="application/json"
        )

    # Tests the status and response of signup endpoint
    def test_enterUser(self):
        response = self.signup(
            "testing@test.com", "password`123", "XYZ", "ABC", "1234567890"
        )
        self.assertEqual(response.status_code, 200)
        json_response = response.data
        print("response received is", response.data)
        self.assertIn(b"Email already present", json_response)
        print("Signup test completed!!!")
        print()


if __name__ == "__main__":
    unittest.main()
