async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.error('There was a problem with your fetch operation:', err);
  }
}

fetchData();

async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/384');
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (err) {
    console.error('There has been a problem with your fetch operation:', err);
  }
}

fetchPokemon();
