class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }
}

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isBorrowed = false;
  }
}

class Library {
  constructor(books, members) {
    this.books = [];
    this.members = [];
  }
  registerMember(user) {
    if (!this.members.some((member) => member.id === user.id)) {
      this.members.push(user);
      console.log(`Member ${user.name} registered successfully.`);
    } else {
      console.log(`Member with ID ${user.id} is already registered.`);
    }
  }
  addNewBook(book) {
    if (!this.books.some((b) => b.isbn === book.isbn)) {
      this.books.push(book);
      console.log(`Book "${book.title}" added successfully.`);
    } else {
      console.log(`Book with ISBN ${book.isbn} already exists.`);
    }
  }
  borrowBook(user, isbn) {
    const member = this.members.find((member) => member.id === user.id);
    if (member) {
      member.borrowBook(isbn, this);
    } else {
      console.log(`User with ID ${user.id} is not registered.`);
    }
  }
  returnBook(user, isbn) {
    const member = this.members.find((member) => member.id === user.id);
    if (member) {
      member.returnBook(isbn, this);
    } else {
      console.log(`User with ID ${user.id} is not registered.`);
    }
  }
}

const library = new Library(); //Creating library

//Creating books
const book1 = new Book(
  "The Subtle art of Not giving a fuck",
  "Mark Manson",
  "1234567890"
);
const book2 = new Book(
  "The Psychology of Money",
  "Morgan Housel",
  "1234567891"
);
const book3 = new Book("The Mafia Manager", "Machiavelli", "1234567892");

//Adding Books to library
library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);

//Borrowing books from library
library.borrowBook("1", "1234567890");
library.borrowBook("1", "1234567891");
library.borrowBook("1", "1234567892");

library.returnBook("1", "1234567890");
library.borrowBook("1", "1234567892");
