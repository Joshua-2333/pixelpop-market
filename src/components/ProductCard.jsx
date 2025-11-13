import { useState } from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <div className="quantity-control">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Math.max(1, +e.target.value))}
        />
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
