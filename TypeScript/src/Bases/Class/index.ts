

export class Drink {
  name: string;
  /**
   *
   */
  constructor(name: string) {
    this.name = name;
    
  }

  info(){
    return `The drink is ${this.name}`
  }
}


const beer = new Drink('beer')
console.log(`log ${beer.info()}`);
