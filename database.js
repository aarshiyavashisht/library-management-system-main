var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'lms',
    user: 'root',
    password: 'aarshiYa30@'
});

module.exports = connection;