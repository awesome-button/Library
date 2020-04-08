import * as render from "./render.js";
import {Book} from "./book.js";
import {Library} from "./library.js";
import {list} from "./books.js";

function eventController() {
    const newTitle = document.getElementsByClassName('title')[0];
    const newAuthor = document.getElementsByClassName('author')[0];
    const newYear = document.getElementsByClassName('year')[0];
    const newBookButton = document.getElementById('showFormButton');
    const addButton = document.getElementById('addButton');
    let delButtons = document.getElementsByClassName('delete');

    //We first create a library from the existing books we have in 'books.js' module.
    //To do so(see function below createLibrary()), we create a class instance of Library (located in 'library.js' module).
    //We iterate through our array of books and create a book instance from each object/book of the array. We use our static constructor within Library class to do so.
    //We add each book instance that was created to our library with the help of 
    //the method of our Library class 'add'.
    //We then go to our 'render.js' module and display each of our books.
    //After that we select the delete button and add an event listener.
    //! We rely on the fact that indices of delete buttons, of the cards that hold our books and
    //and of our book objects in the library class instance match.
    const library = Library.from(list);
    displayBooks();

    newBookButton.addEventListener('click', render.showForm);

    addButton.addEventListener('click', () => {
        addBook();
        clearForm();
        let currentDel = delButtons[delButtons.length - 1];
        listenToDelete(currentDel);
    });

    function displayBooks() {
        for (let i = 0; i < library.library.length; i++) { // looping through library array inside ob Library class instance
            render.display(library.library[i]); //displaying each book on the page
            let button = delButtons[i]; //selecting delete button for each book
            listenToDelete(button); //adds event listener to the a book's delete button
        }
    }

    function addBook() {
        const book = new Book(newTitle.value, newAuthor.value, newYear.value);
        library.add(book);
        render.display(book);
    }

    function listenToDelete(button) {
        button.addEventListener('click', (e) => {
            let card = e.target.parentElement;
            let cards = Array.from(document.getElementById("container").childNodes);
            let i = cards.indexOf(card);
            removeBook(i);
        });
    }

    function removeBook(i) {
        library.delete(library.library[i]);
        render.hide(i);
    }

    function clearForm() {
        newTitle.value = "";
        newAuthor.value = "";
        newYear.value = "";
    }
}

export  { eventController }
