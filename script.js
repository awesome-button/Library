const library = [
    {title: 'The Hobbit', author: 'Tolkien', year: 1937},
    {title: 'Anna Karenina', author: 'Tolstoy', year: 1877},
    {title: 'The Catcher In The Rye', author: 'Salinger', year: 1941},
    {title: 'Martin Iden', author: 'London', year: 1909},
    {title: 'Герой нашего времени', author: 'Лермонтов', year: 1840}];

const container = document.getElementById('container');
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
}

function addBookToLibrary() {
    const newBook = new Book(newTitle.value, newAuthor.value, newYear.value);
    library.push(newBook);
    displayOrRemove(newBook);
}

function displayOrRemove(book) {
    const card = document.createElement('div');
    card.setAttribute('class', 'books');

    card.innerText = `${book.title}\n
    ${book.author}\n
    ${book.year}\n`;

    const delButton = document.createElement('button');
    delButton.setAttribute('class', 'delete');
    card.appendChild(delButton);
    container.appendChild(card);

    delButton.addEventListener('click', () => {
        container.removeChild(card);
    })
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

library.forEach(book => displayOrRemove(book));

newBookButton.addEventListener('click', showForm);
addButton.addEventListener('click', () => {
    addBookToLibrary();
    clearForm();
});