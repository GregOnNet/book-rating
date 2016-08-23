export class Book {

  constructor(public title: string,
              public description: string,
              public rating = 0,
              public isbn?: string) {  }

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
