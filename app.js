const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  const card = document.getElementById("card");
  const btn = document.getElementById("btn");

  let getPokeData = () => {
    // generating random numbers for the card
    let id = Math.floor(Math.random() * 150) + 1;

  }

  btn.addEventListener('click', getPokeData)