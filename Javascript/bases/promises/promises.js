// Import stylesheets

// Write Javascript code!
const appDiv = document.getElementById('app');

let pokemon = null

const datos = [
  {
    id: 1,
    title: 'title 1',
    description: 'description 1',
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description 2',
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description 3',
  },
  {
    id: 4,
    title: 'title 4',
    description: 'description 4',
  },
];

const getPokemon = ()=>{
  console.log()
  fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(data => {

  data.json().then(response => {
    console.log(response)

    pokemon = response

  })
  })
}

const getData = () => {

  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(datos);
    }, 1000)
    setTimeout(()=>{
      console.log('Falloooooo')
      reject('Timeout Api gateway 504');
    }, 5000)
  })

};


(async()=>{

  try {
    const response = await getData()
    console.log('response',response)
  } catch (e) {
    console.error(e)
  }

})
getData().then(response =>{
  console.log('response',response)
}).catch((e)=>{console.error(e)})


// getPokemon()
// console.log('pokemon', pokemon)


// appDiv.innerHTML = getData()?.reduce((ac, item) => {
//   return (
//     ac +
//     `<h1>${item.title}</h1>
//     <p>${item.description}</p>`
//   );
// }, '');
