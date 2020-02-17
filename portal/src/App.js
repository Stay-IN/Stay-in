import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import { Login, Singup, Addhotel, Thankspage } from 'Pages';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Singup} />
        <Route exact path="/addhotel" component={Addhotel} />
        <Route exact path="/Thankspage" component={Thankspage} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
