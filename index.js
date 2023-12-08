
var express = require("express");
var app = express();
var cors = require("cors");
var connection = require("./database");

app.use(cors());

app.use(express.json());

// Get all books
app.get("/", function (req, res) {
  let sql = "SELECT * FROM books";
  connection.query(sql, function (err, results) {
    res.send(results);
  });
});

// Add a new book
app.post("/addBook", function (req, res) {
  const formData = req.body;
  
  // Construct the SQL query
  let sql = "INSERT INTO books (title, author, isbn, quantity, genre) VALUES (?, ?, ?, ?, ?)";
  
  // Execute the query
  connection.query(sql, [formData.title, formData.author, formData.isbn, formData.quantity, formData.genre], function (err, result) {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ success: true });
    }
  });
});

app.delete("/deleteBook/:id", function (req, res) {
  const bookId = req.params.id;

  // Construct the SQL query
  const sql = "DELETE FROM books WHERE book_id = ?";

  // Execute the query
  connection.query(sql, [bookId], function (err, result) {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } else {
      console.log('Book deleted successfully');
      res.status(200).json({ success: true });
    }
  });
});

app.put("/updateBook/:id", function (req, res) {
  const bookId = req.params.id;
  const formData = req.body;

  // Construct the SQL query
  const sql = "UPDATE books SET title=?, author=?, isbn=?, quantity=?, genre=? WHERE book_id=?";

  // Execute the query
  connection.query(
    sql,
    [formData.title, formData.author, formData.isbn, formData.quantity, formData.genre, bookId],
    function (err, result) {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      } else {
        console.log('Book updated successfully');
        res.status(200).json({ success: true });
      }
    }
  );
});

app.listen(4000, function () {
  console.log("App Listening on port 4000");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
  });
});
