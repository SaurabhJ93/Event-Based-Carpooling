from flask import Flask, current_app
from flask_mysqldb import MySQL
# from index import app

app = Flask(__name__)

# app.config['MYSQL_HOST'] = 'fall19-ssdi-project-group5-db.cz4afuqpuil9.us-east-2.rds.amazonaws.com/'
# app.config['MYSQL_USER'] = 'Project_root'
# app.config['MYSQL_PASSWORD'] = 'Frank3nst3In_18'
# app.config['MYSQL_DB'] = 'EVENT_BASED_CARPOOLING'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Passport@sj93'
app.config['MYSQL_DB'] = 'db1'

mysql = MySQL(app)

class GetConnection():
    def __init__(self):
        cursor = mysql.connection.cursor()
        cursor.execute('''SELECT USERNAME from USER''')
        rv = cursor.fetchall()
        print('db op', rv)

        return str(cursor)