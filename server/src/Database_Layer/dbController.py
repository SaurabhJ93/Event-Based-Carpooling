
class DBController():
    def __init__(self, cursor):
        self.cursor = cursor

    def getUser(self, username):
        print('username in getuser', username, type(username))
        # self.cursor.execute('SELECT * from USER where USERNAME = (%s)' % (username))
        print('SELECT u1.FIRST_NAME, r1.RIDE_ID, r2.STATUS FROM RIDES_OFFERED r1 INNER JOIN USER u1 ON r1.USERNAME = u1.USERNAME INNER JOIN RIDES_REQUESTED r2 ON r1.USERNAME = r2.USERNAME WHERE r1.USERNAME = "%s"'% (username))
        self.cursor.execute('SELECT u1.FIRST_NAME, r1.RIDE_ID, r2.STATUS FROM RIDES_OFFERED r1 INNER JOIN USER u1 ON r1.USERNAME = u1.USERNAME INNER JOIN RIDES_REQUESTED r2 ON r1.USERNAME = r2.USERNAME WHERE r1.USERNAME = "%s"'% (username))
        resp = self.cursor.fetchone()
        return(resp)
