import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import OneShare from "./pages/home/index";


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={OneShare} />

      </Switch>
    </Router>
  );
}

export default App;
