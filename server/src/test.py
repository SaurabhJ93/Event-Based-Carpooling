# Flask endpoint test cases
import unittest
from flask import Flask
from index import app
import json

BASE_URL = "http://127.0.0.1:5000"
eventId = "5097856"  # Hardcoded eventID to test the event page

class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    # Tests the home page endpoint
    def test_home(self):
        response = self.app.get(BASE_URL + "/index")
        data = json.loads(response.get_data())
        self.assertIn("performers", str(data))  # Testing if data is correct
        self.assertEqual(response.status_code, 200)  # Testing if endpoint is hitting

    # Tests the event page endpoint - data is returning and correct data is present
    def test_eventData(self):
        response = self.app.get(BASE_URL + "/event/" + eventId)
        data = json.loads(response.get_data())
        self.assertIn("performers_names", str(data))
        self.assertEqual(response.status_code, 200)

    # Tests the offered rides data endpoint - data is returning and correct data is present
    def test_rideOffered(self):
        response = self.app.get(BASE_URL + "/event/rides/" + eventId)
        data = json.loads(response.get_data())
        self.assertIn("RIDE_ID", str(data))
        self.assertEqual(response.status_code, 200)

    # Tests the insert request in database endpoint - data is getting saved
    def test_saveRequest(self):
        # Test data is hitting the aws server directly, need to make a dummy db
        Testdata = {
            "rideId": "125",
            "eventId": "1",
            "userId": "aoheffernan3",
            "status": "pending",
        }
        response = self.app.post(
            BASE_URL + "/saveRequest",
            data=json.dumps(Testdata),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)
    
    def signup(self, email, password, firstName, lastName, phoneNumber):
        testData = {
            "email":email, 
            "password":password, 
            "firstName":firstName, 
            "lastName":lastName, 
            "phoneNumber":phoneNumber
        }
        print('Tetsing signup.....data is', testData)
        return self.app.post(
            '/signup',
            data=json.dumps(testData),
            content_type="application/json"            
        )

    # Tests the status and response of signup endpoint
    def test_enterUser(self):        
        response = self.signup("testing@test.com", "password`123", "XYZ", "ABC", "1234567890")
        self.assertEqual(response.status_code, 200)
        json_response = response.data
        print('response received is', response.data)
        self.assertIn(b'Email already present', json_response)
        print('Signup test completed!!!')
        print()


if __name__ == "__main__":
    unittest.main()