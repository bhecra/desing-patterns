class Person {
  constructor(name, lastName, age, country, hobbies) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.hobbies = hobbies;
  }
  getFullName() {
    return this.name + ' ' + this.lastName;
  }
}

class PersonBuilder {
  constructor() {
    this.reset();
  }
  reset() {
    this.name = '';
    this.lastName = '';
    this.age = '';
    this.country = '';
    this.hobbies = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }
  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  setCountry(country) {
    this.country = country;
    return this;
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
    return this;
  }

  build() {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.hobbies
    );

    this.reset();

    return person;
  }
}

const personBuilder = new PersonBuilder();
const chris = personBuilder
  .setName('Christian')
  .setCountry('Colombia')
  .setAge('29')
  .setLastName('Burbano')
  .addHobby('nadar')
  .addHobby('comer')
  .build();
const juan = personBuilder
  .setName('Juan')
  .setCountry('Colombia')
  .setAge('30')
  .setLastName('Pepito')
  .addHobby('jugar futbol')
  .addHobby('comer')
  .build();

console.log(juan);
