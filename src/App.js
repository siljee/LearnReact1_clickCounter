import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

function App() {
  let [count, setCount] = useState(0);
  const incrementCount = (increment) => setCount(count + increment);

  return (
    <div className="App">
      <Button 
        count={count}
        incrementCount={incrementCount}
        increment={1}
      />
      <Button 
        count={count}
        incrementCount={incrementCount}
        increment={3}
      />
      <Button 
        count={count}
        incrementCount={incrementCount}
        increment={5}
      />
      <Button 
        count={count}
        incrementCount={incrementCount}
        increment={10}
      />
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
