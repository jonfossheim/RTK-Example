import { useSelector } from 'react-redux';

const Details = () => {
  const count = useSelector((state) => state.counter.count);
  const tracker = useSelector((state) => state.counter.tracker);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Tracker: {tracker}</h2>
    </div>
  );
};

export default Details;
