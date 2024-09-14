// Create a Library object:
// The object should have a property books that holds an array of book objects.
// Define methods on the Library object:
// addBook(book): Adds a new book object to the books array.
// checkAvailability(title): Checks if a book with the given title is available.
// borrowBook(title): Changes the isAvailable status of the book to false if the book is available.
// returnBook(title): Changes the isAvailable status of the book to true.
// listAvailableBooks(): Lists all books with isAvailable set to true.

class Book {
  constructor(title, author, year, isAvailabile) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailabile = isAvailabile;
  }
}

class Library {
  books = [
    new Book("A1", "Efsane", 2023, true),
    new Book("A2", "Efsane", 2023, false),
    new Book("A3", "Efsane", 2023, false),
    new Book("A4", "Efsane", 2023, true),
  ];
  addBook(book) {
    let filteredBooks = this.books.filter(
      (b) => b.title.toLowerCase() == book.title.toLowerCase()
    );
    if (filteredBooks.length == 0) {
      this.books.push(book);
    }
  }
  checkAvailability(title) {
    let filteredBooks = this.books.filter(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (filteredBooks.length > 0) {
      return true;
    }
    return false;
  }

  borrowBook(title) {
    let filteredBooks = this.books.filter(
      (book) =>
        book.title.toLowerCase() === title.toLowerCase() &&
        book.isAvailabile == true
    );
    if (filteredBooks.length > 0) {
      filteredBooks[0].isAvailabile = false;
    }
  }

  returnBook(title) {
    let filteredBooks = this.books.filter(
      (book) =>
        book.title.toLowerCase() == title.toLowerCase() &&
        book.isAvailabile == false
    );
    if (filteredBooks.length > 0) {
      filteredBooks[0].isAvailabile = true;
    }
  }
  listAvailableBooks() {
    let filteredBooks = this.books.filter((book) => book.isAvailabile == true);
    if (filteredBooks.length > 0) {
      console.log(filteredBooks);
    }
  }
  allList() {
    let filteredBooks = this.books.filter((book) => book);
    console.log(filteredBooks);
  }
}

let lib = new Library();
lib.listAvailableBooks();
let book1 = new Book("b1", "Afsana", 2000, true);
lib.addBook(book1);
lib.listAvailableBooks();
lib.returnBook("A3");
lib.listAvailableBooks();
lib.borrowBook("A3");
lib.listAvailableBooks();
console.log(lib.checkAvailability("a1"));
lib.allList();
