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
}

export {Library}