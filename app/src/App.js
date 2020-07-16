import React from 'react';
import './styles.css';
import NumberList from './components/NumberList';
import NumberForm from './components/NumberForm';

function App() {
  return (
    <div className="App">
      <h1 id='header'>THE AMAZING NUMBER</h1>
      <NumberList />
      <NumberForm />
    </div>
  );
}

export default App;
