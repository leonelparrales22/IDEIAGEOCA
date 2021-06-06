import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carrusel from "./componentes/Carrusel";
import Footer from "./componentes/Footer";
import Form from "./componentes/Form";
import Navbar from "./componentes/Navbar";
import About from "./componentes/subsecciones/About";
import Contact from "./componentes/subsecciones/Contact";
import Members from "./componentes/subsecciones/Members";
import News from "./componentes/subsecciones/News";
import Project from "./componentes/subsecciones/Project";
import Publicaciones from "./componentes/subsecciones/Publicaciones";
import Research from "./componentes/subsecciones/Research";

const App = () => {
  const [language, setLanguage] = useState(true);

  const changeLanguage = () => {
    setLanguage(!language);
  };

  return (
    <Router>
      <div>
        <Form setLanguage={changeLanguage} idioma={language} />
        <Navbar setLanguage={changeLanguage} idioma={language} />
        <Switch>
          <Route exact path="/Research" component={() => <Research idioma={language} />} />
          <Route exact path="/Members" component={() => <Members idioma={language} />} />
          <Route exact path="/News" component={() => <News idioma={language} />} />
          <Route exact path="/Projects" component={() => <Project idioma={language} />} />
          <Route exact path="/Publications" component={() => <Publicaciones idioma={language} />} />
          <Route exact path="/AboutUs" component={() => <About idioma={language} />} />
          <Route exact path="/Contact" component={() => <Contact idioma={language} />} />
          <Route exact path="/" component={() => <Carrusel idioma={language} />}/>
        </Switch>
        <Footer setLanguage={changeLanguage} idioma={language} />
      </div>
    </Router>
  );
};

export default App;
