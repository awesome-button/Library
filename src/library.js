class Library {
    constructor() {
        this.library = [];
    }
    add(book) {
        this.library.push(book);
    }
    delete(book) {
        let i = this.library.indexOf(book);
        if (i !== -1) this.library.splice(i, 1);
    }
    static from(books) {
        let lib = new Library();
        for (let i = 0; i < books.length; i++) {
            lib.add(books[i]);
        }
        return lib;
    } 
}

export {Library}