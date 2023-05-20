import React, { FunctionComponent, useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';  
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div>
         {/* Nav bar commune à toutes les pages*/}
         <nav>
            <div className="nav-wrapper teal">
               <Link to="/" className="brand-logo center">Pokédex</Link>
            </div>
         </nav>
         {/* Système de gestion des routes */}
         <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemons" component={PokemonList} />
            <Route path="/pokemons/edit/:id" component={PokemonEdit} />
            <Route path="/pokemons/:id" component={PokemonsDetail} />
            <Route component={PageNotFound}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}
  
export default App;
