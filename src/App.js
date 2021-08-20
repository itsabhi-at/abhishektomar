// import styles

import "./styles/app.scss";
// import modules

import { Route, Switch } from "react-router-dom";

// import pages
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/portfolio">
          <Navbar />
          <Portfolio />
        </Route>
        <Route path="/">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
