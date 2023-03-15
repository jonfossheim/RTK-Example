import { Routes, Route, Link } from 'react-router-dom';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Class from './pages/Class';
import { useSelector } from 'react-redux';
const App = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <nav>
        <h4>
          Items in Cart: {cart.items.length} || Total Price: {cart.total}
        </h4>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/details'>Details</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/dndclasses'>DND Classes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dndclasses' element={<Classes />} />
        <Route path='/class/:id' element={<Class />} />
      </Routes>
    </>
  );
};

export default App;
