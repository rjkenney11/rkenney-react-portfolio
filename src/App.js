import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./component/NavBar/NavBar.js";
// import Footer from "./component/Footer/Footer.js";
import About from "./component/pages/About/About.js";
import Contact from "./component/pages/Contact/Contact";
import Portfolio from "./component/pages/Portfolio/Portfolio";
import Designs from "./component/pages/Designs/Designs";
import Wrapper from "./component/Wrapper/Wrapper";

function App() {
  return (
 
    
    <Router>
    <div>
      <Wrapper>
        <Switch>
          <Route exact path={["/", "/About"]} component={About} />
          <Route exact path={"/Contact"} component={Contact} />
          <Route exact path={"/Portfolio"} component={Portfolio} />
          <Route exact path={"/Designs"} component={Designs} />
        </Switch>
      </Wrapper>
      
    </div>
   </Router>
  
  );
}

export default App;