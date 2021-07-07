import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Getintouch from "./pages/Getintouch";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/getintouch" component={Getintouch} />
      </Switch>
    </Router>
  );
};

export default App;
