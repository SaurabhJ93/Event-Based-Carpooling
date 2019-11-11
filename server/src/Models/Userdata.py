class userData():
    def __init__(self, user_data, offered_data, requested_data):
        self.data = {}

        for d in user_data:
            self.data['user'] = {
                'first_name': d[0],
                'last_name': d[1],
                'contact': d[2],
                'email': d[3],                                
            }
            break
        for d in offered_data:
            self.data['offered_rides_request'] = {
                'ride_id': d[0],
                'name': d[1],
                'status': d[2],
            }
        
        for d in requested_data:
            self.data['requested_rides'] = {
                'ride_id': d[0],
                'status': d[2],
            }

    def getUserData(self):
        return self.data