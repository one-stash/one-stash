import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import OneShare from "./pages/home/index";

// Onboard
import SignIn from "./pages/onboard/sign-in.js";
import SignUp from "./pages/onboard/sign-up.js";


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={OneShare} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />

      </Switch>
    </Router>
  );
}

export default App;
