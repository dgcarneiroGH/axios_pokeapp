import React, { Component } from 'react';
import PokeDescription from '../components/PokeDescription';
import AppNav from '../components/AppNav';

//Imports externos
import axios from 'axios';

class PokeInfoContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pokemonDescription: "",
            pokeName: "",
            pokeId: "",
            height: "",
            weight: "",
            types: []
        }

    }

    componentDidMount() {
        //Petición con axios
        const { match } = this.props;
        const pokeId = match.params.pokeIndex;
        const pokeName = match.params.pokeName;
        const pokeDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${pokeId}/`;
        this.getPokeStats();
        axios.get(pokeDescriptionUrl)
            .then(res => {
                const { flavor_text_entries } = res.data;
                this.setState({
                    pokemonDescription: flavor_text_entries[42].flavor_text,
                    pokeName,
                    pokeId
                });
            });
    }

    getPokeStats() {
        const { match } = this.props;
        const pokeId = match.params.pokeIndex;
        axios.get(`${process.env.REACT_APP_POKE_API_BASE_URL}pokemon/${pokeId}/`)
            .then(res => {
                const { height, weight, types } = res.data;
                this.setState({
                    height,
                    weight,
                    types
                });
            })
    }

    render() {
        let url = `${process.env.REACT_APP_POKEMON_ART}`;
        const { pokemonDescription, pokeName, pokeId, height, weight, types } = this.state;

        return (
            <>
                <AppNav />
                <PokeDescription
                    id={pokeId}
                    name={pokeName}
                    pokeImage={`${url}${pokeId}.png?raw=true`}
                    description={pokemonDescription}
                    height={height}
                    weight={weight}
                    types={types}
                />
            </>
        );
    }
}

export default PokeInfoContainer;