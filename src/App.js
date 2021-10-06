import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  
  return (
    <Router>
      <div className="App">
     
        <Switch>

        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
