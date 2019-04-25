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
      const name = result.name[0].toUpperCase() + result.name.substring(1);
      const pokemonNumber = result.id;

      // section
      const pokemonDisplay = document.createElement('section');
      body.appendChild(pokemonDisplay);

      // ID
      const pokemonId = document.createElement('p');
      pokemonId.innerHTML = `#${pokemonNumber}`;
      pokemonDisplay.appendChild(pokemonId);

      // name
      const pokemonName = document.createElement('p');
      pokemonName.innerHTML = `${name}`;
      pokemonDisplay.appendChild(pokemonName);

      // audio
      // const pokemonCry = document.createElement('audio');
      // pokemonCry.src = `./soundeffects/Pokemon-sounds/pokemon${pokemonNumber}.wav`;
      // pokemonCry.setAttribute('autoplay', 'true');
      // pokemonDisplay.appendChild(pokemonCry);
      window.addEventListener('keydown', function(e) {
        if (e.keyCode === 112) {
          console.log(pokemonNumber);
          if (pokemonNumber <= 150) {
            const pokemonCry = document.createElement('audio');
            console.log('im in');
            pokemonCry.src = `./soundeffects/Pokemon-sounds/pokemon${pokemonNumber}.wav`;
            pokemonCry.setAttribute('autoplay', 'true');
            pokemonDisplay.appendChild(pokemonCry);
            pokemonCry.removeAttribute('class');
          }
        }
      });

      // img
      const pokemonImage = document.createElement('img');
      pokemonImage.setAttribute('src', imgURL);
      pokemonDisplay.appendChild(pokemonImage);

      // Styles
      pokemonDisplay.style.marginTop = '5px';
      pokemonDisplay.style.display = 'flex';
      pokemonId.style.padding = '5px';
      pokemonName.style.padding = '5px';
      // Animations
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
      const pokemonLogo = 'images/pokemonLogo.png';
      const errorMessage = document.createElement('section');
      const pokemonLogoImg = document.createElement('img');
      pokemonLogoImg.setAttribute('src', pokemonLogo);
      pokemonLogoImg.setAttribute('height', '50');
      pokemonLogoImg.style.marginTop = '15px';
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
