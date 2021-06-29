import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CartContext from './components/Contextos/CartContext'

import NavBar from './components/Layout/NavBar/NavBar'
import Index from './components/Layout/Index/Index'
import Categorias from './components/Layout/Categorias/Categorias'
import ItemDetailContainer from './components/Layout/Items/ItemDetailContainer';

function App() {
  return (
    <div>
      <CartContext>
      <Router>
        <NavBar />  
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/categorias/:id">
            <Categorias />
          </Route>
          <Route path="/articulo/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
      </CartContext>
    </div>
  );
}

export default App;
