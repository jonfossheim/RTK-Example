import { useSelector, useDispatch } from 'react-redux';
import { removeLast } from '../state/cart/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const count = useSelector((state) => state.counter.count);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log(state);

  return (
    <div>
      <h1>Cart Total: {cart.total}</h1>
      <h3>Counter: {count}</h3>
      <button
        onClick={() => {
          dispatch(removeLast());
        }}
      >
        Remove Latest
      </button>
      <ul>
        {cart.items.map((item, idx) => {
          return (
            <li key={idx}>
              Item:{item.name} Price: {item.price}
              <p>Amount: {item.amount}</p>
              <input type={'number'}></input>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
