import './App.css';
import React from 'react';

import Average from './components/Average';
import Range from './components/Range';
import Sort from './components/Sort';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <div className='line'>
        <Range></Range>
      </div>
      <div className='line'>
        <Average></Average>
        <Sum></Sum>
        <Sort></Sort>
      </div>
    </div>
  );
}

export default App;
