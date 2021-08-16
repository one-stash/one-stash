import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { url } from './config'

// Homepage
import OneShare from "./pages/home/index";

// Onboard
import SignIn from "./pages/onboard/sign-in.js";
import SignUp from "./pages/onboard/sign-up.js";

// Dashboard


function App() {
  return (
    <Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router>
					<Switch>
            {/* */}
            <Route path="/" exact component={OneShare} />
            
            {/* onboard route */}
            <Route path={url.signIn} exact component={SignIn} />
            <Route path={url.signUp} exact component={SignUp} />         
            
            {/* dashboard route */}
					</Switch>
				</Router>
			</PersistGate>
		</Provider>
  );
}

export default App;


