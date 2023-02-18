// class Book {
//     constructor(name, author, section) {
//         this.name = name;
//         this.author = author;
//         this.section = section;
//     }
// }

// class Section {

// }

// class Library {}

// Do not change the export statement below
class Book {
    constructor(name, author, section) {
        this.name = name;
        this.author = author;
        this.section = section;
    }
}

class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBookToSection(book) {
        if (!this.books.some(b => b.name === book.name && b.author === book.author)) {
            this.books.push(book);
        }
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.sections = [];
    }

    addSection(section) {
        if (!this.sections.includes(section)) {
            this.sections.push(section);
        }
    }

    addBookToLibrary(book) {
        let section = this.sections.find(s => s.name === book.section);
        if (!section) {
            section = new Section(book.section);
            this.addSection(section);
        }
        section.addBookToSection(book);
    }
}


export { Library, Section, Book };