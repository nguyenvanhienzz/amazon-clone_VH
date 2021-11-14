import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './component/Navbar'
import CheckOut from './component/Checkout';
import SignIn from './component/SignIn';
import Account from './component/Account';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/cart' exact>
            <NavBar />
            <CheckOut />
          </Route>
          <Route path='/signin' exact>
            <SignIn />
          </Route>
          <Route path='/account' exact>
            <Account />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
