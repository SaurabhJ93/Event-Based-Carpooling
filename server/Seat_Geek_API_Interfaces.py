from abc import ABC,abstractmethod #this is imported to declare class as Abstract class and methods as abstract methods

class SG_getallEvents_Interface(ABC):
    @abstractmethod
    def getallEvents(self): pass

class SG_getEvent_Interface(ABC):
    @abstractmethod
    def getEvent(self, eventId): pass

class SG_getVenue_Interface(ABC):
    @abstractmethod
    def getVenue(self, venueId): pass

class SG_getallPerformers_Interface(ABC):
    @abstractmethod
    def getallPerformers(self): pass

class SSG_getPerformer_Interface(ABC):
    @abstractmethod
    def getPerformer(self, performerId): pass

