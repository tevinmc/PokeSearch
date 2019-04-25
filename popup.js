// querySelector
const button = document.querySelector('button');
const text = document.querySelector('input');
const img = document.querySelector('img');
const body = document.querySelector('body');
const input = document.querySelector('input');

// pokeSubmit
function pokeSubmit(param) {
  fetch(`http://pokeapi.co/api/v2/pokemon/${param}`)
    .then(response => response.json())
    .then(result => {
      const imgURL = result.sprites.front_default;
      const backURL = result.sprites.back_default;
      const { name } = result;
      const pokemonNumber = result.id;

      // section
      const pokemonDisplay = document.createElement('section');
      body.appendChild(pokemonDisplay);

      // img
      const pokemonImage = document.createElement('img');
      pokemonImage.setAttribute('src', imgURL);
      pokemonDisplay.appendChild(pokemonImage);

      // ID
      const pokemonId = document.createElement('p');
      pokemonId.innerHTML = `#${pokemonNumber}`;
      pokemonDisplay.appendChild(pokemonId);

      // name
      const pokemonName = document.createElement('p');
      pokemonName.innerHTML = `${name}`;
      pokemonDisplay.appendChild(pokemonName);

      // NEWW
      // pokemonDisplay.style.border = '1px solid black';
      pokemonDisplay.style.marginTop = '10px';
      // pokemonImage.style.border = '1px solid black';
      // pokemonId.style.border = '1px solid black';
      // pokemonName.style.border = '1px solid black';

      pokemonDisplay.style.display = 'flex';
      pokemonId.style.padding = '5px';
      pokemonName.style.padding = '5px';

      if (backURL !== null) {
        setInterval(function() {
          if (pokemonImage.src === imgURL) {
            pokemonImage.setAttribute('src', backURL);
          } else {
            pokemonImage.setAttribute('src', imgURL);
          }
        }, 750);
      }
    })
    .catch(error => {
      console.log(error);
      // change to photo
      const pokemonLogo =
        'http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png';
      const errorMessage = document.createElement('section');
      const pokemonLogoImg = document.createElement('img');
      pokemonLogoImg.setAttribute('src', pokemonLogo);
      pokemonLogoImg.setAttribute('height', '50');
      errorMessage.appendChild(pokemonLogoImg);
      body.appendChild(errorMessage);
      errorMessage.style.marginTop = '10px';
    });
}

// event listeners (UPDATED)
button.addEventListener('click', function() {
  const remove = document.querySelector('section');
  body.removeChild(remove);
  const value = input.value.toLowerCase();
  pokeSubmit(value);
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    const remove = document.querySelector('section');
    body.removeChild(remove);
    const value = input.value.toLowerCase();
    pokeSubmit(value);
  }
});

// pokeSubmit('charmander')
pokeSubmit('');

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
