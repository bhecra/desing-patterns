

interface ICanWalk {
  walk(distance:number):void;
}
interface ICanSwim {
  swim(distance:number):void;
}
interface ICanFly {
  fly(heigth:number):void;
}
interface IAnimal {
  eat():void;
  sleep():void;
}
class Animal implements IAnimal {
  eat(): void {
    throw new Error("Method not implemented.");
  }
  sleep(): void {
    throw new Error("Method not implemented.");
  }
}

class Fish extends Animal implements ICanSwim {
  swim(distance: number): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
      console.log('The fish is eating');
  }

}

class Bird extends Animal implements ICanFly {
  fly(heigth: number): void {
    console.log(`Bird is fliying: ${heigth} meters`);
    
  }
  override eat(): void {
    console.log(`Bird is eating bread`);
      
  }

}
class Dog implements IAnimal, ICanWalk {
  walk(distance: number): void {
    console.log(`Dog is walking: ${distance} meters`);
  }
  eat(): void {
    console.log(`Dog is eating meet`);
  }
  sleep(): void {
    console.log(`Dog is sleeping`);
  }  
}

const jade = new Dog()
const pajaro = new Bird()

jade.eat()
pajaro.eat()
pajaro.fly(50)