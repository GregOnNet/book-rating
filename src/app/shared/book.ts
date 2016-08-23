export class Book {
  constructor(public title: string,
              public description: string,
              public rating = 0) {  }

  rateUp() {
    if (this.rating < 5) { this.rating++; }
  }

  rateDown() {
    if (this.rating > 1) { this.rating--; }
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
