import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <button
        onClick={() => dispatch(incrementByValue(10))}
        className=" m-4 text-xl p-5 bg-green-500 text-white rounded-md"
      >
        Incriment by 10
      </button>
      <button
        onClick={() => dispatch(increment())}
        className=" m-4 text-xl p-5 bg-green-500 text-white rounded-md"
      >
        Incriment
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className=" m-4 text-xl p-5 bg-red-500 text-white rounded-md"
      >
        Decriment
      </button>
    </div>
  );
}

export default App;
