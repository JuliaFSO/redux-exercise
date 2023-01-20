import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>React-Redux App</h1>
      <div className='line'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className='line'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
