import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../state/counter/counterSlice';
import { toggleTheme } from '../state/theme/themeSlice';
const Home = () => {
  const count = useSelector((state) => state.counter.count);
  const theme = useSelector((state) => state.theme);

  console.log(theme);
  const dispatch = useDispatch();

  let current;
  if (!theme.mode) {
    current = theme.light;
  } else {
    current = theme.dark;
  }

  return (
    <div>
      <div style={{ color: current.primary }}>Count: {count}</div>
      <button
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        Toggle theme
      </button>
      <button onClick={() => dispatch(increment())}>Add 1</button>
      <button onClick={() => dispatch(decrement())}>Minus 1</button>
    </div>
  );
};

export default Home;
