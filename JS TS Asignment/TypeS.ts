interface Book {           // defined an interface
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
}
const books: Book[] = [ {           //create an array
    id: 1,
    title: "hello",
    author: 'Shatt Vang',
    published: new Date('1991-01-01'),
    available: true,
},
{
    id: 2,
    title: "world",
    author: 'Vang',
    published: new Date('1992-01-01'),
    available: true,
},
{
    id: 3,
    title: "Fake Third book",
    author: 'SV',
    published: new Date('1993-01-01'),
    available: true,
},
];

function addBook(book: Book): void {  //define a function addBook
    books.push(book);
  }

const newBook: Book = {           //Add new book
    id: 4,
    title: "hello",
    author: 'Shatt Vang',
    published: new Date('1991-01-01'),
    available: true,
};
addBook(newBook);
console.log(books);

function findBookById(id: number): Book | undefined { // define a function findbookByID
    return books.find(function (book) {
        return book.id === id;
    });
  }

console.log(findBookById(1));


function updateBook(book: Book): boolean { // define a function updateBook
    const index = books.findIndex(function (b) {
        return b.id === book.id;
    });
    if (index !== -1) {
      books[index] = book;
      return true;
    }
    return false;
  }

  console.log(updateBook({ ...newBook, available: false }));


function removeBook(id: number): boolean { //define function removeBook
    const index = books.findIndex(function (book) {
        return book.id === id;
    });
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
  }

  console.log(removeBook(1));