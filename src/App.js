import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <div className='line'>
        <Card title="Card 1" red>Test</Card>
        <Card title="Card 2" blue>Test</Card>
      </div>
      <div className='line'>
        <Card title="Card 3" green>Test</Card>
        <Card title="Card 4" purple>Test</Card>
      </div>
    </div>
  );
}

export default App;
