import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Button, Modal, Form } from 'react-bootstrap';

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    isbn: "",
    quantity: "",
    genre: "",
  });
  const [updateBookId, setUpdateBookId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleAddBook = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setUpdateBookId(null);
    setBookData({
      title: "",
      author: "",
      isbn: "",
      quantity: "",
      genre: "",
    });
  };

  function handleBookSubmit() {
    if (updateBookId) {
      fetch(`http://localhost:3000/updateBook/${updateBookId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          fetchBooks();
        })
        .catch((error) => {
          console.error("Error updating book:", error);
        });
    } else {
      fetch("http://localhost:3000/addBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          fetchBooks();
        })
        .catch((error) => {
          console.error("Error adding book:", error);
        });
    }

    setBookData({
      title: "",
      author: "",
      isbn: "",
      quantity: "",
      genre: "",
    });

    handleModalClose();
  };

  const fetchBooks = () => {
    fetch("http://localhost:3000/BooksPage")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };

  const handleDeleteBook = (bookId) => {
    fetch(`http://localhost:3000/deleteBook/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchBooks();
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  const handleUpdateBook = (book) => {
    setBookData({
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      quantity: book.quantity,
      genre: book.genre,
    });

    setUpdateBookId(book.book_id);

    setShowModal(true);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="pets-container mx-auto"><br></br>
      <h1 className="text-center">
        Books Available at the Library
        <br/><br/>
        <Button variant="primary" onClick={handleAddBook}>
          Add Book
        </Button>
      </h1>

      <Row xs={1} md={4} className="g-4">
        {books.map((book) => (
          <Col key={book.book_id}>
            <Card
              className="custom-card mb-3"
              style={{ border: "3px solid lightblue" }}
            >
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>ISBN: {book.isbn}</Card.Text>
                <Card.Text>Quantity: {book.quantity}</Card.Text>
                <Card.Text>Genre: {book.genre}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteBook(book.book_id)}
                  className="Crud-btn"
                >
                  Delete
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleUpdateBook(book)}
                  className="Crud-btn"
                >
                  Update
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{updateBookId ? "Update Book" : "Add Book"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book title"
                name="title"
                value={bookData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book author"
                name="author"
                value={bookData.author}
                onChange={handleInputChange}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formISBN">
              <Form.Label>ISBN</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Enter book ISBN"
                name="isbn"
                value={bookData.isbn}
                onChange={handleInputChange}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter book quantity"
                name="quantity"
                value={bookData.quantity}
                onChange={handleInputChange}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book genre"
                name="genre"
                value={bookData.genre}
                onChange={handleInputChange}
              />
            </Form.Group>

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBookSubmit}>
            {updateBookId ? "Update Book" : "Add Book"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BooksPage;
