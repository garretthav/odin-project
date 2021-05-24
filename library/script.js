let myLibrary = [];
const bookList = document.querySelector('.bookList');
const btnNewBook = document.querySelector('.btnNewBook');
const newBookForm = document.querySelector('.newBookForm');
const btnSubmit = document.querySelector('.btnSubmit');

btnNewBook.addEventListener('click', function() {
    console.log(newBookForm);
    newBookForm.setAttribute("class", "show");
})

btnSubmit.addEventListener('click', function() {
    //put inputs into variables
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    //create new book obj with variables
    let book = new Book(title, author, pages, read);
    //put the new book in the library arr
    myLibrary.push(book);
    //clear and then display the new library
    clearLibrary();
    displayLibrary();
    //hide the form
    newBookForm.setAttribute("class", "hide");
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(...args) {
    for (let i=0; i < args.length; i++) {
        myLibrary.push(args[i]);
    }
}

Book.prototype.info = function() {
    if (this.read) {
        return this.title + " by " + this.author + ", " + this.pages + " pages," + " read";
    } else {
        return this.title + " by " + this.author + " ," + this.pages + " pages," + " not read yet";
    } 
}

function displayLibrary() {
    for (const book of myLibrary) {
        let row = document.createElement('div');
        row.className = 'row';
        for (const property in book) {
            if (book.hasOwnProperty(property)) {
                row.textContent += property + ': ' + book[property] + ' ';
            }
        }
        bookList.appendChild(row);
    }
}

function clearLibrary() {
    while (bookList.firstChild) {
		bookList.removeChild(bookList.lastChild);
	}
}

let martian = new Book('The Martian', 'Andy Weir', 369, true);
let artemis = new Book('Artemis', 'Andy Weir', 309, false);

addBookToLibrary(martian, artemis);

displayLibrary();