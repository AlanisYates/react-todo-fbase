import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Login  from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
