export class Book {
  isbn: string;

  constructor(public title: string,
              public description: string,
              public rating = 0) {  }

  rateUp() {
    if (this.rating < 5) { this.rating++; }
  }

  rateDown() {
    if (this.rating > 0) { this.rating--; }
  }
}

// ist das gleiche wie

/*

export class Book {
  title: string;

  constructor( title: string) {
    this.title = title;
  }
}
*/
