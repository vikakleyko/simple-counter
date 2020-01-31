import React, { useState } from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const [enteredNumber, setEnteredNumber] = useState(0);

  const getEnteredNumber = e => {
    setEnteredNumber(e.target.value);
  }

  const getNumber = e => {
    e.preventDefault();
    setNumber(Number(enteredNumber));
    setEnteredNumber(0);
  }

  return (
    <div className="App">
      <div className="counter">
        <h1>Counter {counter}</h1>

        <form className="submit-form" onSubmit={getNumber}>
          <h2>Enter a number: </h2>
          <input onChange={getEnteredNumber} value={enteredNumber} />
          <button type="submit">Submit</button>
        </form>

        <div className="increment">
          <h2>Increment on {number}</h2>
          <button onClick={() => dispatch(increment(number))}>Increment</button>
        </div>

        <div className="decrement">
          <h2>Decrement on {number}</h2>
          <button onClick={() => dispatch(decrement(number))}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
