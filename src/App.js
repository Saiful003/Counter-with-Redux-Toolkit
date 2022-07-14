import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useCounter } from "./features/counterSlice";

export default function App() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { increment, decrement, reset } = useCounter();
  const { count } = counter;

  return (
    <div className="counter__container">
      <div className="counter__wrapper">
        <div className="counter__title">
          <h2>Counter Using Redux-Toolkit!</h2>
        </div>
        <div>
          <p> {count} </p>
        </div>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
      </div>
    </div>
  );
}
