import React, { Fragment } from 'react';
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';

function List({ pokeData }) {
    return (
        <Fragment>
            <Grid container justify="center" >
                {pokeData.map((pokemon, index) => {

                    let url = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/";
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2];

                    return <PokeCard
                        key={index}
                        to={`/poke-info/${pokeIndex}/${pokemon.name}`}
                        id={pokeIndex}
                        name={pokemon.name}
                        image={`${url}${pokeIndex}.png?raw=true`} />
                })}
            </Grid>
        </Fragment>
    );
}

export default List;