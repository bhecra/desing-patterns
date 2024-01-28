interface IStack<T> {
  push(value: T): void;
  pop(): T;
  min(): T;
  peek(): T;
}

class Stack implements IStack<number> {
  private data: number[];

  constructor(data: number[]) {
    this.data = data;
  }
  push(value: number): void {
    const size = this.data.length;
    this.data[size] = value;
  }
  pop(): number {
    const size = this.data.length-1;
    const lastItem = this.data[size];
    this.data.length = size;
    return lastItem;
  }
  min(): number {
    throw new Error('Method not implemented.');
  }

  getData(){
    return this.data
  }
  peek(): number {
    throw new Error('Method not implemented.');
  }
}

const stack1 = new Stack([1, 2, 3]);
stack1.push(4);
console.log('pop', stack1.pop());
console.log('data', stack1.getData());
