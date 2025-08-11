import { useState } from 'react';

export default function Hooks() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function divideByTwo() {
    setCount(Math.floor(count / 2)); // no decimal
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>+1</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>-1</button>
      <button onClick={divideByTwo} style={{ marginLeft: '10px' }}>/2</button>
      <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
}
