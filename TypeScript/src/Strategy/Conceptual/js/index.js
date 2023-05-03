console.log('Hola Strategy');

class Strategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount * (1 + this.tax);
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount * (1 + this.tax) - this.discount;
  }
}

class ForeingSaleStrategy {
  getDollarPrice() {
    return 4500;
  }

  calculate(amount) {
    return amount * this.getDollarPrice();
  }
}

const regularStrategy = new RegularSaleStrategy(0.19);
const discountStrategy = new DiscountSaleStrategy(0.19, 100);
const foreingStrategy = new ForeingSaleStrategy();

const context = new Strategy(regularStrategy);

console.log('regularStrategy', context.calculate(1000));
context.setStrategy(discountStrategy);
console.log('discountStrategy', context.calculate(1000));
context.setStrategy(foreingStrategy);

console.log('foreingStrategy', context.calculate(1000));
