from flask import Flask, json, render_template, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL
import config

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = config.MYSQL_HOST
app.config['MYSQL_USER'] = config.MYSQL_USER
app.config['MYSQL_PASSWORD'] = config.MYSQL_PASSWORD
app.config['MYSQL_DB'] = config.MYSQL_DB
#app.config['MYSQL_USER1'] = config.MYSQL_USER1
#app.config['MYSQL_PASSWORD1'] = config.MYSQL_PASSWORD1
#app.config['MYSQL_USER2'] = config.MYSQL_USER2
#app.config['MYSQL_PASSWORD2'] = config.MYSQL_PASSWORD2
users = {
    'root': 'Stromer/2003',
    'Player': 'password1',
    'Coach': 'password2'
}

mysql = MySQL(app)



@app.route('/api/Sports', methods=['GET'])
def get_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Sports")  # Replace 'your_table' with your actual table name
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

@app.route('/api/Player', methods=['GET'])
def player_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Player")  # Replace 'your_table' with your actual table name
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

@app.route('/api/view1', methods=['GET'])
def View():
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'Player'
    app.config['MYSQL_PASSWORD'] = 'password1'
    app.config['MYSQL_DB'] = 'sports_management'
    cur = mysql.connection.cursor()
    cur.execute("show tables")  # Replace 'your_table' with your actual table name
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

@app.route('/api/login', methods=['POST'])
def Login():
    try:
        user = request.json.get('username')
        password = request.json.get('password')
        if user in users and users[user] == password:
            app.config['MYSQL_HOST'] = 'localhost'
            app.config['MYSQL_USER'] = user
            app.config['MYSQL_PASSWORD'] = password
            app.config['MYSQL_DB'] = 'sports_management'
            cur = mysql.connection.cursor()
            cur.execute("show tables")
            data = cur.fetchall()
            return jsonify({'success': True, 'tables': data})  
            cur.close()
        else:
            return jsonify({'success': False, 'error': 'Invalid Credential'})
        
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)

