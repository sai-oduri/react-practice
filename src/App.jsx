import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  function cal(e) {
    const inputValue = parseInt(e.target.value) || 0;
    setX(e.target.value);
    const val = (inputValue * (inputValue + 1)) / 2;
    setY(val);
  }

  return (
    <div>
      <input onChange={cal} type="number" />
      <p>Sum is {y}</p>
      <button onClick={() => setZ(z + 1)}>Counter : {z}</button>
    </div>
  );
}

export default App;
