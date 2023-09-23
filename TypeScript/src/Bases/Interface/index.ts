

interface Product {
  price: number;
  getPrice(): string;
}


export class Drink {
  name: string;
  /**
   * name of drink
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

class Beer extends Drink implements Product {
  private alcohol:number
  price: number;
  /**
   *
   */
  constructor(name:string, alcohol:number, price:number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  getPrice(): string {
    return `$ ${this.price}`
  }

  info(): string {
      return `${super.info()} and has ${this.alcohol}% alcohol`
  }
}

const beer = new Beer('beer', 8.7, 1000)
console.log(`log ${beer.info()} and its price is ${beer.getPrice()}`);


class Snack implements Product {
  name: string;
  price: number;

  /**
   *
   */
  constructor(name:string, price:number) {
    this.name = name
    this.price = price
    
  }
  getPrice(): string {
    return `El precio es $${this.price}`
  }

}

const products: Product[] = [
  new Beer('corona', 7.5, 1000),
  new Beer('heineken', 8.5, 1500),
  new Snack('galletas', 100)
]


function getPrices(items:Product[]) {
  for (const item of items) {
    console.log(item.getPrice());
    
  }
}

getPrices(products)
