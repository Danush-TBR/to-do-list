import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo'; 





function App() {
  return (
    <div className="App">
      <Header/>
      <Todo/>
      
    </div>
  );
}

export default App;
