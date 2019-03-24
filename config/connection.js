// Set up the code to connect Node to MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    // port: 8080,
    user: 'root',
    password: '12345678',
    database: 'burgers_db'
});

connection.connect(err => {
    if(err) {
        console.log(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID ${connection.threadId}`);
});

// Export the connection
module.exports = connection;