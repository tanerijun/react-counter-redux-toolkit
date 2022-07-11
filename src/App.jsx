import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store";
import "./App.css";

function App() {
  const [n, setN] = useState(2);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrementBy = () => {
    dispatch(counterActions.incrementBy(n));
  };

  const handleDecrementBy = () => {
    dispatch(counterActions.decrementBy(n));
  };

  return (
    <div>
      <h1>Counter App with Redux Toolkit</h1>
      <h2>Current counter: {counter}</h2>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <label>Change by:</label>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={handleIncrementBy}>Increment by</button>
        <button onClick={handleDecrementBy}>Decrement by</button>
      </div>
    </div>
  );
}

export default App;
