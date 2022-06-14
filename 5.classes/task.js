class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      return this._state = 0;
    } else if (state > 100) {
      return this._state = 100;
    }

    return this._state = state;
  }

  get state() {
    return this._state;
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
    this.author = author;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
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
      return this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let arr of this.books) {
      if (arr[type] === value) {
        return arr;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    let bookDelete = null;
    for (let arr of this.books) {
      if (arr.name === bookName) {
        bookDelete = arr;
      }
    }

    if (bookDelete !== null) {
      let index = this.books.findIndex(i => i === bookDelete);
      this.books.splice(index, 1);
    }

    return bookDelete;
  }
}

//task3
class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = [];
  }

  addMark(mark, subject) {
    if (mark < 1 || mark > 5) {
      return "Ошибка, оценка должна быть числом от 1 до 5";
    }

    for (let sub of this.subject) {
      if (Object.keys(sub)[0] === subject) {
        return sub[subject].push(mark);
      }
    }

    return this.subject.push({ [subject]: [mark] });
  }

  getAverageBySubject(subject) {
    for (let sub of this.subject) {
      if (Object.keys(sub)[0] === subject) {
        let average = sub[subject].reduce((sum, item) => sum + item, 0) / sub[subject].length;
        return average;
      }
    }

    return 'Несуществующий предмет';
  }

  getAverage() {
    let count = 0;
    let sum = 0;
    let average;

    for (let sub of this.subject) {
      let subject = Object.keys(sub)[0];

      average = sub[subject].reduce((sum, item) => sum + item, 0) / sub[subject].length;
      sum += average;
      count += 1;
    }

    return sum / count;
  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}