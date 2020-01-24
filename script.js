const library = () => {

    const newBookButton = document.getElementById('button');
    let form = document.getElementById('form');
    
    const addButton = document.getElementsByClassName('add')[0];

    let library = document.getElementById('container');
    let title = document.getElementsByClassName('title')[0];
    let author = document.getElementsByClassName('author')[0];
    let year = document.getElementsByClassName('year')[0];
    
    const newBook = () => {
        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    }
    
    const addBookToLibrary = () => {
        let card = document.createElement('div');
        card.setAttribute('class', 'books');
        card.innerText = `${title.value}\n
        ${author.value}\n
        ${year.value}`
        library.appendChild(card);
        clearForm();
    }

    const clearForm = () => {
        title.value = "";
        author.value = "";
        year.value = "";
    }

    newBookButton.addEventListener('click', newBook);
    addButton.addEventListener('click', addBookToLibrary);
}

library();