import './App.css';
import React from 'react';

import Range from './components/Range';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <div className='line'>
        <Range></Range>
      </div>
      <div className='line'>
        <Card title="Card 2" blue>Test</Card>
        <Card title="Card 3" green>Test</Card>
        <Card title="Card 4" purple>Test</Card>
      </div>
    </div>
  );
}

export default App;
