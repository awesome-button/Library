const button = document.getElementById('button');
let form = document.getElementById('form');
let library = [];

function book(name, author, year) {
    this.name = name,
    this.author = author,
    this.year = year
}

function addBookToLibrary(book) {
    library.push(book);
    let container = document.getElementById('container');
    let card = document.createElement('div');
    card.setAttribute('class', 'books');
    card.innerText = `${book.name}\n
    ${book.author}\n
    ${book.year}`
    container.appendChild(card);
}

function addForm() {
    
    let inputs = ['Name', 'Author', 'Year'];
    
    inputs.forEach(property => {
        let ele = document.createElement('input');
        ele.setAttribute('id', `${property}`);
        ele.setAttribute('type', 'text');
        ele.setAttribute('placeholder', `${property}`);
        
        form.appendChild(ele);  
    })
    addButton();
}

function addButton() {

    let add = document.createElement('button');
    add.innerText = "Add";
    add.setAttribute('id', 'add');
    form.appendChild(add);

    const name = document.getElementById('Name');
    const author = document.getElementById('Author');
    const year = document.getElementById('Year');

    add.addEventListener('click', () => {
        let book1 = new book(name.value, author.value, year.value);
        addBookToLibrary(book1);
        name.value = "";
        author.value = "";
        year.value = "";
    })
    button.removeEventListener('click', addForm);
}

button.addEventListener('click', addForm);


let book1 = new book('The Hobbit', 'Tolkien', 1937);
addBookToLibrary(book1);
let book2 = new book('Anna Karenina', 'Tolstoy', 1877);
addBookToLibrary(book2);
let book3 = new book('The Catcher in The Rye', 'Salinger', 1941);
addBookToLibrary(book3);
let book4 = new book('Martin Iden', 'London', 1909);
addBookToLibrary(book4);
let book5 = new book('Герой нашего времени', 'Лермонтов', 1840);
addBookToLibrary(book5);