import Header from './components/header';
import "bootstrap/dist/css/bootstrap.css";
import Search from './components/search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Cards from './components/cards';


function App() {
  return(
    <div>
      <Header />
      <Cards />
    </div>
  )
}

export default App;
