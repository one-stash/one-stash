import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom' 

// 
import { url } from './adapter/common';
import AuthRoute from './components/authRoute';

// Homepage
import OneShare from "./pages/home/index.js";

// Onboard
import SignIn from "./pages/onboard/sign_in.js";
import SignUp from "./pages/onboard/sign_up.js";
import AdminEntry from "./pages/onboard/admin_entry.js";

// Dashboard
import Home from "./pages/dashboard/home.js";
import AdminHome from "./pages/dashboard/admin_home.js";

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
					<AuthRoute path={url.aEntry} exact component={AdminEntry} />        
            
          {/* dashboard route */}
          <AuthRoute path={url.dashHome} exact component={Home} />  
          <AuthRoute path={url.adminHome} exact component={AdminHome} />  
      </Switch>
    </Router> 
  );
}

export default App;


