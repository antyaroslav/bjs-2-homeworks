"use strict";

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
      return;
    }

    if (value > 100) {
      this._state = 100;
      return;
    }

    this._state = value;
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const book = this.books.find((item) => item[type] === value);

    if (!book) {
      return null;
    }

    return book;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex((book) => book.name === bookName);

    if (bookIndex === -1) {
      return null;
    }

    return this.books.splice(bookIndex, 1)[0];
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 1 || mark > 5) {
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }

    const marksSum = this.marks[subject].reduce((sum, mark) => sum + mark, 0);

    return marksSum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    let marksSum = 0;
    let marksCount = 0;

    if (subjects.length === 0) {
      return 0;
    }

    for (let i = 0; i < subjects.length; i += 1) {
      const subjectMarks = this.marks[subjects[i]];

      marksSum += subjectMarks.reduce((sum, mark) => sum + mark, 0);
      marksCount += subjectMarks.length;
    }

    return marksSum / marksCount;
  }
}
