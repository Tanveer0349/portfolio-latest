import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Portfolio from "./components/portfolio";
import NotFound from "./components/notFound";
import SocialLinks from "./components/socialLinks";
import { Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/about" Component={About} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/skills" Component={Experience} />
          <Route path="/contact" Component={Contact} />
          <Route path="/home" Component={Home} />
          <Route path="/" Component={Home} />
          <Route path="*" Component={NotFound} />
      </Routes>
      <SocialLinks />
    </>
  );
};

export default App;
