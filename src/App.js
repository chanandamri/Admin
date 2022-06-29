import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import Test from './components/test/Test';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Test />
      </BrowserRouter>
    </div>
  );
}

export default App;
