const express = require("express")

const BookRepository = require("./src/repositories/BookRepository")
const BookService = require("./src/services/BookService")
const BookController = require("./src/controllers/BookController")

const app = express()

app.use(express.json())

// Dependency Injection
const bookRepository = new BookRepository()
const bookService = new BookService(bookRepository)
const bookController = new BookController(bookService)

// Routes
app.post("/books/:id/borrow", (req, res) => bookController.borrowBook(req, res))

app.post("/books/:id/return", (req, res) => bookController.returnBook(req, res))

app.listen(3000, () => {
  console.log("Library system running on http://localhost:3000")
})