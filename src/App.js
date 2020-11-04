import React, { Fragment } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './style.css'

function App() {
  return (
   <Fragment>
     <Header />
     <Main />
     <Features />
     <Contact />
     <Footer />
   </Fragment>
  );
}

export default App;
