import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  /* Safe image selection for API + custom products */
  const image =
    product.image ||          // custom anime items
    product.thumbnail ||      // dummyjson products
    product.images?.[0] ||    // some APIs use images array
    "/placeholder.jpg";       // optional fallback

  return (
    <div className="product-card">
      
      <img
        src={image}
        alt={product.title}
        className="product-image"
        loading="lazy"
      />

      <h3 className="product-title">{product.title}</h3>

      <p className="product-price">${product.price}</p>

      <div className="quantity-control">
        <button
          aria-label="Decrease quantity"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          -
        </button>

        <input
          type="number"
          min="1"
          value={quantity}
          aria-label="Item quantity"
          onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
        />

        <button
          aria-label="Increase quantity"
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </button>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
