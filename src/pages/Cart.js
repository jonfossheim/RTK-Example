import { useSelector, useDispatch } from 'react-redux';
import { removeLast } from '../state/cart/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

  return (
    <div>
      <h1>Cart Total: {cart.total}</h1>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
