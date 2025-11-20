import { useState } from 'react'
import './App.css'

function App() {
  const [Number, setNumber] = useState(0);
  const handleCheck =() =>{
    setNumber(Number+1)
  };

  return (
    <>
      <h1>State In Function</h1>
      <h1>{Number}</h1>
      <div className="card">
        <button onClick={ handleCheck }>Add </button>
      </div>
    </>
  );
}

export default App
