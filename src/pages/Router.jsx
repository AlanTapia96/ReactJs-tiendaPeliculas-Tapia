import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CategoriesListContainer from '../Components/GenreList/CategoriesListContainer/CategoriesListContainer';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from '../Components/NavBar/NavBar';
import Form from '../Components/Form/Form'
import Cart from '../Components/Cart/Cart';


const Router = () =>{
  return(
    <>
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/film/:filmId' component={ItemDetailContainer} />
            <Route exact path='/categories/:idCategory' component={CategoriesListContainer} />
            <Route exact path='/contact' component={Form} />
            <Route exact path='/' component={ItemListContainer} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='*'>
              <h1>ERROR 404. RUTA NO EXISTENTE</h1>
            </Route>
          </Switch>
        </BrowserRouter>
    </>
)}

export default Router