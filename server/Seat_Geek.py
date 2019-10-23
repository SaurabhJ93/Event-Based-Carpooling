import requests
from requests.exceptions import HTTPError
from Seat_Geek_API_Interfaces import SG_getallEvents_Interface 
#import Seat_Geek_API_Interfaces as SG_Events_Interfaces

class Seat_Geek_Api(SG_getallEvents_Interface):
    def __init__(self):
        print(" at Seat_Geek_Api constructor")
        self.params = {"client_id":"MTkwMzc2MzB8MTU3MTc4MjA1Ni41Mw"}
        self.api_url_base = 'https://api.seatgeek.com/2/'
        self.header = {'Content-Type': 'application/json'}
    
    def getallEvents(self):
        try: 
            self.api_end_point = 'events' #this valriable should change depending on method called
            response = requests.get(self.api_url_base+self.api_end_point, headers=self.header, params=self.params) #get request to api
            response.raise_for_status() # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        except HTTPError as http_error: # raises exception when HTTP error raised
            print(f'HTTP error occurred: {http_error}')
        except Exception as error: #raises exception when other error raised
            print(f'Some other error occurred: {error}')