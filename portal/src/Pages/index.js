import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Singup from 'Pages/Signup';
import Addhotel from 'Pages/Addhotel';
import HotelRooms from 'Pages/HotelRoom';
import Thankspage from 'Pages/ThanksPage';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Singup} />
          <Route exact path="/addhotel" component={Addhotel} />
          <Route exact path="/room/:id" component={HotelRooms} />
          <Route exact path="/Thankspage" component={Thankspage} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
