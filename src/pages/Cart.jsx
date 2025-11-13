import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  if (!cartItems.length) return <h2 className="container">Your cart is empty</h2>;

  return (
    <div className="cart-page container">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.images[0]} alt={item.title}/>
          <div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={e => updateQuantity(item.id, +e.target.value)}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
