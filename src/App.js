import { useCounter } from "./counterContext";
import "./styles.css";

export default function App() {
  const { state, dispatch } = useCounter();

  return (
    <div className="App">
      <div className="counter">{state.counter}</div>
      <button onClick={() => dispatch({ type: "Inc", payload: 50 })}>+</button>
      <button onClick={() => dispatch({ type: "Dec", payload: 10 })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}
