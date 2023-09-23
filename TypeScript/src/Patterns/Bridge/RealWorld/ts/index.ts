interface IListImplementor {
  elements: number[];
  add(number: number): void;
  getElements(): number[];
}

class OrderedList implements IListImplementor {
  elements: number[] = [];
  add(number: number): void {
    this.elements.push(number);
    this.elements.sort();
  }
  getElements(): number[] {
    return this.elements;
  }

}

class UniqueList implements IListImplementor {
  elements: number[] = [];
  add(number: number): void {
    if(!this.elements.includes(number)){

      this.elements.push(number);
      this.elements.sort();
    }
  }
  getElements(): number[] {
    return this.elements;
  }
}

interface IDataAbstraction {
  implementor: IListImplementor;
  add(number: number): void;
  get():number[];
  operation(fn: (number: number) =>number): number[];
}

class DataRefinedAbtraction implements IDataAbstraction {
  implementor: IListImplementor;
  constructor(implementor: IListImplementor) {
    this.implementor = implementor;
  }
  add(number: number): void {
    this.implementor.add(number);
  }
  get(): number[] {
    return this.implementor.getElements()
  }
  operation(fn: (number: number) => number): number[] {
    return this.implementor.getElements().map(fn);
  }
}

const uniqueData = new DataRefinedAbtraction(new UniqueList())
const orderData = new DataRefinedAbtraction(new OrderedList())


uniqueData.add(3)
uniqueData.add(3)
uniqueData.add(1)
uniqueData.add(1)
uniqueData.add(2)
console.log(uniqueData.get());
orderData.add(3)
orderData.add(3)
orderData.add(1)
orderData.add(1)
orderData.add(2)
console.log(orderData.get());

const uniqueItems = uniqueData.operation((number: number) => number*2)

console.log(uniqueItems);
console.log(uniqueData.get());


