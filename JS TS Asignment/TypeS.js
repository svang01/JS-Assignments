"use strict";
const books = [{
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
function addBook(book) {
    books.push(book);
}
const newBook = {
    id: 4,
    title: "hello",
    author: 'Shatt Vang',
    published: new Date('1991-01-01'),
    available: true,
};
addBook(newBook);
console.log(books);
function findBookById(id) {
    return books.find(function (book) {
        return book.id === id;
    });
}
console.log(findBookById(1));
function updateBook(book) {
    const index = books.findIndex(function (b) {
        return b.id === book.id;
    });
    if (index !== -1) {
        books[index] = book;
        return true;
    }
    return false;
}
console.log(updateBook(Object.assign(Object.assign({}, newBook), { available: false })));
function removeBook(id) {
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
