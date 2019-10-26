import requests, json
from requests.exceptions import HTTPError
from API_Interfaces import API_get_Interface 

class Seat_Geek_Api(API_get_Interface):
    def __init__(self):
        APIData = json.load(open('Api_config.json'))["SG"]
        self.params = APIData["params"]
        self.api_url_base = APIData["api_url_base"]
        self.header = APIData["header"]
        

    def getallEvents(self):
        self.api_end_point = 'events' #this valriable should change depending on method called
        response = requests.get(self.api_url_base+self.api_end_point, headers=self.header, params=self.params) #get request to api
        print(self.api_url_base+self.api_end_point)
        if response.raise_for_status() == None: # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        else:
            return None
    def getEvent(self, eventId):
        self.api_end_point = 'events' #this valriable should change depending on method called
        response = requests.get(self.api_url_base+self.api_end_point+"/"+eventId, headers=self.header, params=self.params) #get request to api
        if response.raise_for_status() == None: # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        else:
            return None
    
    def getallVenues(self):
        self.api_end_point = 'venues' #this valriable should change depending on method called
        response = requests.get(self.api_url_base+self.api_end_point, headers=self.header, params=self.params) #get request to api
        if response.raise_for_status() == None: # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        else:
            return None
    def getVenue(self, venueId):
        self.api_end_point = 'venues' #this valriable should change depending on method called
        response = requests.get(self.api_url_base+self.api_end_point+"/"+venueId, headers=self.header, params=self.params) #get request to api
        if response.raise_for_status() == None: # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        else:
            return None
    
    def getallPerformers(self):
        self.api_end_point = 'performers' #this valriable should change depending on method called
        response = requests.get(self.api_url_base+self.api_end_point, headers=self.header, params=self.params) #get request to api
        if response.raise_for_status() == None: # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        else:
            return None
    def getPerformer(self, performerId):
        self.api_end_point = 'performers' #this valriable should change depending on method called
        response = requests.get(self.api_url_base+self.api_end_point+"/"+performerId, headers=self.header, params=self.params) #get request to api
        if response.raise_for_status() == None: # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        else:
            return None