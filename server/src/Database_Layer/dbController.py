from Models.Userdata import userData
class DBController():
    def __init__(self, cursor):
        self.cursor = cursor

    def getUser(self, username):
        print('username in getuser', username, type(username))
        # self.cursor.execute('SELECT u1.FIRST_NAME, r1.RIDE_ID as Offered, r2.STATUS FROM RIDES_OFFERED r1 INNER JOIN USER u1 ON r1.USERNAME = u1.USERNAME INNER JOIN RIDES_REQUESTED r2 ON r1.USERNAME = r2.USERNAME WHERE r1.USERNAME = "%s"'% (username))
        self.cursor.execute('SELECT u1.FIRST_NAME, u1.`LAST_NAME`, u1.`CONTACT_NO`, u1.`EMAIL_ID`, r1.RIDE_ID as RIDE_ID_OFFERED, r1.`NO_OF_SEATS`, r1.`CAR_MODEL` FROM RIDES_OFFERED r1 INNER JOIN USER u1 ON r1.USERNAME = u1.USERNAME WHERE r1.USERNAME = "%s"'% (username))
        user_data = self.cursor.fetchall()
        print('user_data', user_data)
        print()
        for i in user_data:
            print(i)
            self.cursor.execute('SELECT `RIDE_ID`, `USERNAME`, `STATUS` FROM RIDES_REQUESTED WHERE RIDE_ID = "%s"'%(i[4]))
            offered_data = self.cursor.fetchall()
            print('offered_data', offered_data)

        print('------')
        self.cursor.execute('SELECT `RIDE_ID`, `USERNAME`, `STATUS` FROM RIDES_REQUESTED WHERE USERNAME = "%s"'%(username))
        requested_data = self.cursor.fetchall()
        print('requested_data', requested_data)

        user_model = userData(user_data, offered_data, requested_data)
        resp = user_model.getUserData()
        print()
        print(resp)

        return(resp)
