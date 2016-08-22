export class Book {
  constructor(public title: string,
              public description: string,
              public rating = 0) {  }
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
