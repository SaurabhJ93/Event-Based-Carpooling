import requests, json
from requests.exceptions import HTTPError
from API_Interfaces import API_get_Interface 
from Preprocess_data import preprocess

class Seat_Geek_Api(API_get_Interface): #Seatgeek api class from api interface class
    def __init__(self):
        with open('Api_config.json') as Apiconfig:  #assigning Seat Geek Data
            Apiconfigdata = json.load(Apiconfig)["SG"]
            self.params = Apiconfigdata["params"]
            self.api_url_base = Apiconfigdata["api_url_base"]
            self.header = Apiconfigdata["header"]
        
    def getallEvents(self): # to get all events
        self.api_end_point = 'events' #this valriable should change depending on method called
        try:
            response = requests.get(self.api_url_base+self.api_end_point, headers=self.header, params=self.params) #get request to api
            response.raise_for_status() # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        except requests.exceptions.HTTPError as err:
            return {"status": "error", "message": err}
        except:
            return {"status": "error", "message": "Data Processing Issue", "code": 808}

    def getEvent(self, eventId): # to get an event with an eventid
        self.api_end_point = 'events' #this valriable should change depending on method called
        try:
            response = requests.get(self.api_url_base+self.api_end_point+"/"+eventId, headers=self.header, params=self.params) #get request to api
            response.raise_for_status() # No exception will be raised when the request is successful
            dataprep = preprocess(response.json())
            return dataprep.Event_page_data()
        except requests.exceptions.HTTPError as err:
            return {"status": "error", "message": err}
        except:
            return {"status": "error", "message": "Data Processing Issue", "code": 808}
        
    
    def getallVenues(self): # to get all venues events
        self.api_end_point = 'venues' #this valriable should change depending on method called
        try:
            response = requests.get(self.api_url_base+self.api_end_point, headers=self.header, params=self.params) #get request to api
            response.raise_for_status() # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        except requests.exceptions.HTTPError as err:
            return {"status": "error", "message": err}
        except:
            return {"status": "error", "message": "Data Processing Issue", "code": 808}

    def getVenue(self, venueId): #to get events from a given venue
        self.api_end_point = 'venues' #this valriable should change depending on method called
        try:
            response = requests.get(self.api_url_base+self.api_end_point+"/"+venueId, headers=self.header, params=self.params) #get request to api
            response.raise_for_status() # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        except requests.exceptions.HTTPError as err:
            return {"status": "error", "message": err}
        except:
            return {"status": "error", "message": "Data Processing Issue", "code": 808}
    
    def getallPerformers(self): # gets events of some performers
        self.api_end_point = 'performers' #this valriable should change depending on method called
        try:
            response = requests.get(self.api_url_base+self.api_end_point, headers=self.header, params=self.params) #get request to api
            response.raise_for_status() # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        except requests.exceptions.HTTPError as err:
            return {"status": "error", "message": err}
        except:
            return {"status": "error", "message": "Data Processing Issue", "code": 808}

    def getPerformer(self, performerId): # gets events of given performer
        self.api_end_point = 'performers' #this valriable should change depending on method called
        try:
            response = requests.get(self.api_url_base+self.api_end_point+"/"+performerId, headers=self.header, params=self.params) #get request to api
            response.raise_for_status() # No exception will be raised when the request is successful
            return response.json() #returning response in json format
        except requests.exceptions.HTTPError as err:
            return {"status": "error", "message": err}
        except:
            return {"status": "error", "message": "Data Processing Issue", "code": 808}