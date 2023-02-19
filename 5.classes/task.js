//Задавча 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = Math.round(this.state * 1.5);
    }

    set state(int) {
        if (int < 0) {
            this._state = 0;
        } else if (int > 100) {
            this._state = 100;
        } else {
            this._state = int;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...args) {
        super(...args);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'detective';
    }
}

//Задача 2
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
        let result = this.books.find((el) => (el[type] === value));
        if (result === undefined) {
            return null;
        } else {
            return result;
        }
    }


    giveBookByName(bookName) {
        let result = this.books.find((el) => (el['name'] === bookName));
        if (result === undefined) {
            return null;
        } else {
            let index = this.books.findIndex((el) => (el === result));
            this.books.splice(index, 1);
            return result;
        }
    }
}
// задача 3
class Student {
    marks = {};
  
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
    }
  
    addMark(mark, discipline) {
      if (mark < 1 || mark > 5) {
        return console.log('Ошибка, оценка должна быть числом от 1 до 5');
      } else if (this.marks[discipline] != undefined) {
          this.marks[discipline].push(mark);
      } else {
          this.addDiscipline(discipline);
          this.marks[discipline].push(mark);
      }
    }
  
    addDiscipline(discipline) {
      this.marks[discipline] = [];
    }
  
    getAverageBySubject(discipline) {
      if (this.marks[discipline] != undefined || this.marks[discipline].length > 0) {
        let sum = this.marks[discipline].reduce((acc, item) => acc += item);
          return sum / this.marks[discipline].length
      } else if (this.marks[discipline] != undefined || this.marks[discipline].length === 0) {
        return console.log('оценок нет');
      } else {
        return console.log(`Предмета ${discipline} не существует`);
      }
    }
  
    getAverage() {
      let length = 0;
      let sum = 0;
      for (let key in this.marks) {
        sum += this.marks[key].reduce((acc, item) => acc += item);
        length += this.marks[key].length;
      }
      return sum / length
    }
  
    exclude(reason) {
      delete this.marks;
      this.excluded = reason;
      console.log(reason);
    }
  }



const library = new Library("Библиотека имени Ленина");

const story = new DetectiveBook(
    'Артур Конан Дойл',
    'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
    2019,
    1008
);
const picknic = new FantasticBook(
    'Аркадий и Борис Стругацкие',
    'Пикник на обочине',
    1972,
    168
);
const timeMachine = new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138);
const murzilka = new Magazine('Мурзилка', 1924, 60);
const yangViziters = new NovelBook('Уэллс Мурзилка', 'Янг Визитерс', 2022, 500);

library.addBook(story);
library.addBook(picknic);
library.addBook(timeMachine);
library.addBook(murzilka);
library.addBook(yangViziters);

console.log(library.findBookBy("releaseDate", 1919));

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Янг Визитерс");
console.log("Количество книг после выдачи: " + library.books.length);

yangViziters.state = 25;
yangViziters.fix();

library.addBook(yangViziters);