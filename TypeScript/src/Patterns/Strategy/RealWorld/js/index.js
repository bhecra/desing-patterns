const data = [
  {
    name: 'Erdinger Pikantus',
    country: 'Alemana',
    info: 'Cerveza Alemana',
    img: 'https://s3.amazonaws.com/storage.wobiz.com/140/140714/images/Large/1561476118_b2cfabbb3c6550d2d095119cae1fe5b0.140714.jpeg',
  },
  {
    name: 'Corona',
    country: 'Mexico',
    info: 'Cerveza Mexicana',
    img: 'https://us.123rf.com/450wm/kornienko/kornienko1801/kornienko180100131/127885612-chisinau-moldova-19-de-enero-de-2018-foto-de-una-botella-de-cerveza-corona-extra-corona.jpg?ver=6',
  },
  {
    name: 'Poker',
    country: 'Colombia',
    info: 'Cerveza Colombiana',
    img: 'https://www.nicepng.com/png/full/239-2398254_la-presentacin-perfecta-pa-los-amigos-tradicionales-nueva.png',
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }
  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, item) => {
      return (
        ac +
        `
      <div>
        <h2>${item.name}</h2>
        <p>${item.country}</p>
      </div>
      <hr>
      `
      );
    }, '');
  }
}
class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, item) => {
      return (
        ac +
        `
        <div>
          <h2>${item.name}</h2>
          <p>${item.country}</p>
          <p>${item.info}</p>
        </div>
        <hr>
      `
      );
    }, '');
  }
}

class ListWithImgStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, item) => {
      return (
        ac +
        `
        <div>
          <h2>${item.name}</h2>
          <p>${item.country}</p>
          <p>${item.info}</p>
          <img style="width: 100px; height: 100px"  src=${item.img}>
        </div>
        <hr>
      `
      );
    }, '');
  }
}

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy(),
  new ListWithImgStrategy(),
];

const infoContext = new InfoContext(new ListStrategy(), data, content);

infoContext.show();

slcOptions.addEventListener('change', (event) => {
  const action = event.target.value;

  infoContext.setStrategy(strategies[action]);
  infoContext.show();
});

window.addEventListener('resize', (event) => {

  console.log(event);
  
  const { innerHeight, innerWidth } = event.target;
  
  console.log(innerHeight, innerWidth);

  if(innerWidth < 600){

    infoContext.setStrategy(strategies[2]);
  }else{
    infoContext.setStrategy(strategies[1]);

  }

  // infoContext.setStrategy(strategies[action]);
  infoContext.show();
});
