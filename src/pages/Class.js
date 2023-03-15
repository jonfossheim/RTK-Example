import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CLASSES, URL } from '../utils/constants';
import { addItem } from '../state/cart/cartSlice';
import { useDispatch } from 'react-redux';

const Class = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchClass = async () => {
      let res = await fetch(URL + CLASSES + id);
      let data = await res.json();
      setItem(data);
    };
    fetchClass();
  }, []);

  if (!item) {
    return <p>loading</p>;
  }

  const handleAdd = () => {
    dispatch(addItem({ name: item.name, price: item.hit_die * 2 }));
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <h3>D{item.hit_die}</h3>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default Class;
