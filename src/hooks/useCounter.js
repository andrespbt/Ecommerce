import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = value => {
    setCounter(current => current + value);
  };

  const decrement = value => {
    if (counter === 1) return;
    setCounter(current => current - value);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
