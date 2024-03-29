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
app.config['MYSQL_USER1'] = config.MYSQL_USER1
app.config['MYSQL_PASSWORD1'] = config.MYSQL_PASSWORD1
app.config['MYSQL_USER2'] = config.MYSQL_USER2
app.config['MYSQL_PASSWORD2'] = config.MYSQL_PASSWORD2
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
#@app.route('/api/Sports/Insert', methods=['POST'])
#def insert_data(){
#    if request.method == 'POST':
#        Sports_Name = request.form['Sports_Name'],
#        cur = mysql.connection.cursor(),
#        cur.execute("INSERT INTO Sports () VALUES (%s)", (Sports_Name)),
#        mysql.connection.commit(),
#        cur.close(),
#      #  pylac jsonify(Sports_Name)
#}
@app.route('/api/Player', methods=['GET'])
def player_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Player")  # Replace 'your_table' with your actual table name
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

@app.route('/api/view1', methods=['GET'])
def View():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM player_view")  # Replace 'your_table' with your actual table name
    data = cur.fetchall()
    cur.close()
    return jsonify(data)
@app.route('/api/login', methods=['POST'])
def Login():
   
        cur = mysql.connection.cursor()
        user = request.form("input1")
        password = request.form("input2")
        if user in users and users[user] == password:
            return json.dumps(user)
            
        else:
            return json.dumps("nahi hua")
            

#    cur.execute("showtab")  # Replace 'your_table' with your actual table name
#    data = cur.fetchall()
#    cur.close()
#    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)

