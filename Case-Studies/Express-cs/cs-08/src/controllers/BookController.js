class BookController {

  constructor(bookService) {
    this.bookService = bookService
  }

  borrowBook(req, res) {
    try {

      const book = this.bookService.borrowBook(req.params.id)

      res.json({
        status: "success",
        data: book
      })

    } catch (error) {

      res.status(400).json({
        status: "error",
        message: error.message
      })

    }
  }

  returnBook(req, res) {
    try {

      const book = this.bookService.returnBook(req.params.id)

      res.json({
        status: "success",
        data: book
      })

    } catch (error) {

      res.status(400).json({
        status: "error",
        message: error.message
      })

    }
  }

}

module.exports = BookController