import random, hashlib
from Models.Userdata import userData

class DBController():
    def __init__(self, cursor, mysql):
        self.cursor = cursor
        self.mysql = mysql

    def getUser(self, username):
        print('username in getuser', username, type(username))
        # self.cursor.execute('SELECT u1.FIRST_NAME, r1.RIDE_ID as Offered, r2.STATUS FROM RIDES_OFFERED r1 INNER JOIN USER u1 ON r1.USERNAME = u1.USERNAME INNER JOIN RIDES_REQUESTED r2 ON r1.USERNAME = r2.USERNAME WHERE r1.USERNAME = "%s"'% (username))
        self.cursor.execute('SELECT * FROM USER WHERE USERNAME = "%s"'% (username))
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
    
    def enterUser(self, data):
        print()
        print('!!In enterUser!!')
        #Generate username
        userName = data['firstName'][:3] + data['lastName'] + str(random.randint(10, 99))

        #Generate password Hash
        hashed_password = (hashlib.md5(data['password'].encode())).hexdigest()
        print('password hex is', hashed_password)

        try:
            self.cursor.execute('Select * from USER where EMAIL_ID ="%s"'%(data['email']))
            response = self.cursor.fetchall()
            print("Select resp", response)
            if response:
                return('Email already present. Try a new email-id')
            else:
                self.cursor.execute('INSERT INTO USER (USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, CONTACT_NO, EMAIL_ID ) VALUES ("%s", "%s", "%s", "%s", "%s", "%s")' % (userName, hashed_password, data['firstName'], data['lastName'], data['phoneNumber'], data['email']))
                self.mysql.connection.commit()
                return "Success"
        except Exception as e:
            return ('error:' + str(e))
