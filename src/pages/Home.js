import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../state/counter/counterSlice';
const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Add 1</button>
      <button onClick={() => dispatch(decrement())}>Minus 1</button>
    </div>
  );
};

export default Home;
