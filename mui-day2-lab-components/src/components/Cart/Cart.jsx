import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../../Redux/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group">
          {items.map(item => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center mb-3"
            >
              <div>
                {item.title} - ${item.price} x
                <button
                  className="btn btn-outline-secondary btn-sm mx-2"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="btn btn-outline-secondary btn-sm mx-2"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}