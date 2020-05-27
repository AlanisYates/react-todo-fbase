import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Login  from './Components/Login';
import SignUp from './Components/SignUp'

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
