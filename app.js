const result = document.getElementById("result");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    if (input.value == ""){
        nullPokemon();
    }
    else{
        getPokemon();
    }
});

async function getPokemon(){
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);
    
    const data = await res.json();

    result.innerHTML = `<div class="item"><img src="${data.sprites.front_default}" alt="${data.name}" /><h4>${data.name}</h4></div>`;

    input.value ="";
}


async function nullPokemon(){
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    
    const data = await res.json();

    const pokemon = data.results;

    let output ="";

    pokemon.forEach(zombie => {
        output += `<div class="item"><h4>${zombie.name}</h4><a href="${zombie.url}">${zombie.url}</a></div>`;
    });

    result.innerHTML = output;

}
