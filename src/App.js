import React from 'react'
import { Switch,Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div >
      <Switch> {/* cuando uso switch solo cargo el primer componente que encuentro y mas nada */}
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>    </div>
  );
}

export default App;
