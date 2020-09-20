import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

function App() {
  let [count, setCount] = useState(0);
  const incrementCount = () => setCount(++count);

  return (
    <div className="App">
      <Button 
        count={count}
        incrementCount={incrementCount}
      />
      <Display 
        count={count}
        />
    </div>
  );
}

export default App;
