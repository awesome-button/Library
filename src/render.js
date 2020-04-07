
const container = document.getElementById('container');

function showForm() {
    let form = document.getElementById('form');
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
} 

function display(book) {
    const card = document.createElement('div');
    card.setAttribute('class', 'books');
    card.item = book; // attached a node in the form of a JS book object to the div element 'card'
    card.innerText = `${card.item.title}\n
    ${card.item.author}\n
    ${card.item.year}\n`;

    const delButton = document.createElement('button');
    delButton.setAttribute('class', 'delete');
    card.appendChild(delButton);
    container.appendChild(card);
}

function hide(index) {
    container.removeChild(container.childNodes[index]);
}



export {showForm, display, hide}