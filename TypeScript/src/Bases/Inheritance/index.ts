

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


const drink = new Drink('agua')
console.log(`log ${drink.info()}`);

class Beer extends Drink {
  alcohol:number
  /**
   *
   */
  constructor(name:string, alcohol:number) {
    super(name);
    this.alcohol = alcohol;
  }


  info(): string {
      return `${super.info()} and has ${this.alcohol}% alcohol`
  }
}

const beer = new Beer('beer', 8.7)
console.log(`log ${beer.info()}`);
