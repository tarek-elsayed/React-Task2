import Home from "./Pages/Home";
import Login from "./Components/login/Login";
import { BrowserRouter as Router , Route ,Switch } from "react-router-dom"
import SignUp from "./Components/SignUp/SignUp";
function App() {
  return (
    <div >
      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/signup" component={SignUp}/>
      </Switch>
      </Router>

         
    </div>
  );
}

export default App;
