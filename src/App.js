import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// 
import { url } from './adapter/common';
import AuthRoute from './components/authRoute';

// Homepage
import OneShare from "./pages/home/index.js";

// Onboard
import SignIn from "./pages/onboard/sign-in.js";
import SignUp from "./pages/onboard/sign-up.js";

// Dashboard
import Home from "./pages/dashboard/home.js";

// Dashboard


function App() {
  return (
    <Router>
      <Switch>
        {/* */}
          <Route path="/" exact component={OneShare} />
            
          {/* onboard route*/}
          <Route path={url.signIn} exact component={SignIn} />
					<Route path={url.signUp} exact component={SignUp} />        
            
          {/* dashboard route */}
          <AuthRoute path={url.dashHome} exact component={Home} />  
      </Switch>
    </Router> 
  );
}

export default App;


