// database.js
const mysql = require('mysql');

// Replace the following with your own database connection details
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'jahnavi1333',
  database: 'lms',
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;