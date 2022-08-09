import React from 'react';
import './App.css';
import { Header } from './Components/Header'
import { Home } from './Components/Home';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Header />
          <Home />
      </Router>

    </>
  );
}

export default App;
