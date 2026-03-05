class BookService {

  constructor(bookRepository) {
    this.bookRepository = bookRepository
  }

  borrowBook(id) {

    const book = this.bookRepository.findById(id)

    if (!book) {
      throw new Error("Book not found")
    }

    if (book.isBorrowed) {
      throw new Error("Book already borrowed")
    }

    book.isBorrowed = true
    this.bookRepository.update(book)

    return book
  }

  returnBook(id) {

    const book = this.bookRepository.findById(id)

    if (!book) {
      throw new Error("Book not found")
    }

    if (!book.isBorrowed) {
      throw new Error("Book was not borrowed")
    }

    book.isBorrowed = false
    this.bookRepository.update(book)

    return book
  }

}

module.exports = BookService