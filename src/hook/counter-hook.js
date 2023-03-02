import {useState, useEffect} from 'react';

function useCounter(val, stepIncrement, stepDecrement) {
  const [count, setCount] = useState(val);

  function increment() {
    setCount(count + stepIncrement);
  }

  function decrement() {
    setCount(count - stepDecrement);
  }

  function reset() {
    setCount(0);
  }

  return [count, increment, decrement, reset]
}

export default useCounter;