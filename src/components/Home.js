import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={process.env.PUBLIC_URL + '/images/poke.png'}
                    alt="pokemon_logo"
                    width="50%" />
                <h1>Poke App</h1>
                <Link className="home" to="/pokemons" >Ver Pokémons</Link>
            </header>
        </div>
    );
}

export default Home;