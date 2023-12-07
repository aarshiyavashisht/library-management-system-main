var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'lms',
    user: 'root',
    password: 'jahnavi1333'
});

module.exports = connection;