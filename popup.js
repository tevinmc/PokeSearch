// querySelector
const button = document.querySelector('button');
const text = document.querySelector('input');
const img = document.querySelector('img');
const body = document.querySelector('body');
const form = document.querySelector('#data');
debugger;
console.log(form);

// pokeSubmit
function pokeSubmit(param) {
  fetch(`http://pokeapi.co/api/v2/pokemon/${param}`)
    .then(response => response.json())
    .then(result => {
      const imgURL = result.sprites.front_default;
      const { name } = result;
      const pokemonNumber = result.id;

      // section
      const pokemonDisplay = document.createElement('section');
      body.appendChild(pokemonDisplay);

      // img
      const pokemonImage = document.createElement('img');
      pokemonImage.setAttribute('src', imgURL);
      pokemonDisplay.appendChild(pokemonImage);

      // name
      const pokemonName = document.createElement('p');
      pokemonName.innerHTML = `${name}`;
      pokemonDisplay.appendChild(pokemonName);

      // ID
      const pokemonId = document.createElement('p');
      pokemonId.innerHTML = `#${pokemonNumber}`;
      pokemonDisplay.appendChild(pokemonId);
    })
    .catch(error => console.log(error));
}

// pokeSubmit('charmander');
// pokeSubmit('pikachu');
// pokeSubmit('mewtwo');

// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };
