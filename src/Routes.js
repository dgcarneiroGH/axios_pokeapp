import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PokeInfoContainer from './containers/PokeInfoContainer';
import PokeListContainer from './containers/PokeListContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pokemons" component={PokeListContainer} />
            <Route exact path="/poke-info/:pokeIndex/:pokeName" component={PokeInfoContainer} />
        </Switch>
    );
}

export default Routes;