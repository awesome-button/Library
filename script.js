const library = document.getElementById('container');

const newTitle = document.getElementsByClassName('title')[0];
const newAuthor = document.getElementsByClassName('author')[0];
const newYear = document.getElementsByClassName('year')[0];

const newBookButton = document.getElementById('button');
const addButton = document.getElementsByClassName('add')[0];

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    createCard() {
        let card = document.createElement('div');
        card.setAttribute('class', 'books');
        card.innerText = `${this.title}\n
        ${this.author}\n
        ${this.year}`
        library.appendChild(card);
        clearForm();
    }
}

function addBookToLibrary() {
    let newBook = new Book(newTitle.value, newAuthor.value, newYear.value);
    newBook.createCard();
}


function showForm() {
    let form = document.getElementById('form');
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
} 

function clearForm() {
    newTitle.value = "";
    newAuthor.value = "";
    newYear.value = "";
}

newBookButton.addEventListener('click', showForm);
addButton.addEventListener('click', addBookToLibrary);