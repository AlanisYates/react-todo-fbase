import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9e9e9e",
      main: "#424242",
      dark: "#212121",
      contrastText: "#fff",
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  );
};

export default App;


