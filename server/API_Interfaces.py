from abc import ABC,abstractmethod #this is imported to declare class as Abstract class and methods as abstract methods

#This file consists of Interface classes
class API_getEvents_Interface(ABC):
    @abstractmethod
    def getallEvents(self): pass
    @abstractmethod
    def getEvent(self, eventId): pass

class API_getVenue_Interface(ABC):
    @abstractmethod
    def getallVenues(self): pass
    @abstractmethod
    def getVenue(self, venueId): pass

class API_getPerformers_Interface(ABC):
    @abstractmethod
    def getallPerformers(self): pass
    @abstractmethod
    def getPerformer(self, performerId): pass

