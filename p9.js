const books = [
  {
    title: "Book 1",
    author: "Author A",
    year: 1990,
    genre: "Science Fiction",
  },
  {
    title: "Book 2",
    author: "Author B",
    year: 1985,
    genre: "Mystery",
  },
  {
    title: "Book 3",
    author: "Author A",
    year: 2005,
    genre: "Science Fiction",
  },
  {
    title: "Book 4",
    author: "Author C",
    year: 1998,
    genre: "Fantasy",
  },
];

function findOldestBook(books) {
  let oldBook = books[0];
  for (let i = 1; i < books.length; i++) {
    if (books[i].year < oldBook.year) {
      oldBook = books[i];
    }
  }
  return oldBook;
}

function findAuthorWithMostBooks(books) {
  let mxAuthor = "";
  let authorCnt = {};
  let mxCnt = 0;
  for (let i = 0; i < books.length; i++) {
    const author = books[i].author;
    authorCnt[author] = authorCnt[author] ? authorCnt[author] + 1 : 1;

    if (authorCnt[author] > mxCnt) {
      mxAuthor = author;
      mxCnt = authorCnt[author];
    }
  }
  return mxAuthor;
}

function findBooksByAuthor(books, name) {
  let resBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === name) {
      resBooks.push(books[i]);
    }
  }
  return resBooks;
}

function countBooksByGenre(books) {
  let genreCnt = {};
  for (let i = 0; i < books.length; i++) {
    const genre = books[i].genre;
    genreCnt[genre] = genreCnt[genre] ? genreCnt[genre] + 1 : 1;
  }
  return genreCnt;
}

console.log("Oldest Book:", findOldestBook(books)); // Output: { title: "Book 2", author: "Author B", year: 1985, genre: "Mystery" }

console.log("Author with Most Books:", findAuthorWithMostBooks(books)); // Output: "Author A"

console.log("Books by Author A:", findBooksByAuthor(books, "Author A")); // Output: [{ title: "Book 1", author: "Author A", year: 1990, genre: "Science Fiction" }, { title: "Book 3", author: "Author A", year: 2005, genre: "Science Fiction" }]

console.log("Count of Books by Genre:", countBooksByGenre(books)); // Output: { "Science Fiction": 2, "Mystery": 1, "Fantasy": 1 }
