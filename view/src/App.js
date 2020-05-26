import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Login  from './Components/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
