import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
  const total = safeCartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  if (!safeCartItems.length)
    return <h2 className="container">Your cart is empty</h2>;

  const handleCheckout = () => {
    // Navigate to CheckoutMessage page
    navigate("/checkout-message");
  };

  return (
    <div className="cart-page container">
      <h2>Your Cart</h2>
      {safeCartItems.map((item) => (
        <div key={item.id} className="cart-item">
          {item.images && item.images.length > 0 ? (
            <img
              src={item.images[0]}
              alt={item.title}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "4px",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                color: "#888",
                fontSize: "0.8rem",
              }}
            >
              No Image
            </div>
          )}

          <div style={{ flex: 1 }}>
            <h3>{item.title}</h3>
            <p>${item.price.toFixed(2)}</p>
            <label>
              Quantity:
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, +e.target.value)}
                style={{ marginLeft: "0.5rem", width: "60px" }}
              />
            </label>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#d32f2f",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
