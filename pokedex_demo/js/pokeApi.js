const pokemon = document.querySelectorAll("[data-pokemon]"); //recupera todos los data
 
//fn llama a API pokemon con nombre de pokemon a consultar
const consultaPokemon = poke => {
       
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemon = poke;
    
    fetch(`${url}${pokemon}`)
    .then(response => response.json())
    .then(resp => {
        console.log(resp);
        //informacion del pokemon
        const imagenPok = resp.sprites.front_default; //imagen
        const tipo = resp.types[0].type.name; 

        // une informacion a la pagina
        document.querySelector('.pokemonEs').innerHTML =
        ` <div class="pokemonEs">
        <div class="image-conteiner-aux ">
            <img src="${imagenPok}" alt="imagen de charmander" class="pokemon-image"/>
        </div> 
        <div class="pokemon-profile-conteiner">
            <div class="pokemon-profile">
                <div class="pokemon-name">
                    <h1>Charmander N.º004</h1>
                </div> 
                <div class="pokemon-description">
                    <p>
                        Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.
                    </p>
                </div> 
                <div class="charmander-info">
                    <div class="charmander-info-left">
                        <ul class="charmander-info-left__ul">
                            <li>
                                <span class="atribute-title">Altura</span>
                                <span class="atribute-value">0,6m</span>
                            </li>
                            <li>
                                <span class="atribute-title">Peso</span>
                                <span class="atribute-value">8,5Kg</span>
                            </li>
                        </ul>
                    </div>
                    <div class="charmander-info-right">
                        <ul class="charmander-info-right__ul">
                            <li>
                                <span class="atribute-title">Categoría</span>
                                <span class="atribute-value">Lagartija</span>
                            </li>
                            <li>
                                <span class="atribute-title">Habilidad</span>
                                <span class="atribute-value">Mar de llamas</span>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div class="tipo">
                    <h2>Tipo</h2>
                </div>
                <div class="lista-de-tipos">
                    <ul>
                        <li class="tipo-fuego tipo-aux">
                            <span>${tipo}</span>
                        </li>
                    </ul>
                </div> 
                <div class="debilidad">
                    <h2>Debilidad</h2>
                </div>
                <div class="lista-de-debilidades">
                    <ul>
                        <li class="tipo-agua tipo-aux">
                            <span>Agua</span>
                        </li>
                        <li class="tipo-tierra tipo-aux">
                            <span>Tierra</span>
                        </li>
                        <li class="tipo-roca tipo-aux">
                            <span>Roca</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </div> 
    </div>`
        ;
    });

}

//por cada data agrega evento 
pokemon.forEach( e =>{
    e.addEventListener('click', function(e){
        const btn = e.currentTarget; // :( no entendi cual es la diferecia entre currentTarget y relativeTarget Pero Mejor usa target solito
        // console.log(btn.getAttribute('data-pokemon'));
        consultaPokemon(btn.getAttribute('data-pokemon')); //llama funcion y pasa el data con el nombre del pokemon
    
    } );
});
