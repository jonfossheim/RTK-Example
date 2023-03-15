import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL, CLASSES } from '../utils/constants';

const Classes = () => {
  const [results, setResults] = useState(null);
  useEffect(() => {
    const fetchClasses = async () => {
      let res = await fetch(URL + CLASSES);
      let data = await res.json();
      console.log(data);
      setResults(data.results);
    };
    fetchClasses();
  }, []);

  if (!results) {
    return <p>fetching</p>;
  }

  return (
    <>
      <ul>
        {results.map((item, idx) => {
          return (
            <li key={idx}>
              <Link to={`/class/${item.index}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Classes;
