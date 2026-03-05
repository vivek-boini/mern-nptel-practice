class BookRepository {

  constructor() {
    this.books = [
      { id: "1", title: "Node Basics", author: "John", isBorrowed: false },
      { id: "2", title: "Express Guide", author: "Mike", isBorrowed: false }
    ]
  }

  findAll() {
    return this.books
  }

  findById(id) {
    return this.books.find(book => book.id === id)
  }

  update(book) {
    const index = this.books.findIndex(b => b.id === book.id)
    if (index !== -1) {
      this.books[index] = book
    }
  }

}

module.exports = BookRepository