// src/api/productsAPI.js
import { customProducts } from "./customProducts";

const API_URL = "https://dummyjson.com/products?limit=100";

export async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();

    // Keep only categories we want
    const allowedCategories = [
      "mens-shirts",
      "mens-shoes",
      "womens-dresses",
      "womens-shoes",
      "womens-jewellery",
      "mens-watches",
      "smartphones",
      "laptops",
    ];

    // Filter and map to normalized structure
    const filtered = data.products
      .filter((p) => allowedCategories.includes(p.category))
      .map((p) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        price: p.price,
        category: p.category,
        image: p.thumbnail,
      }));

    // Limit to 30
    const apiProducts = filtered.slice(0, 30);

    // Merge with custom anime products
    const combined = [...apiProducts, ...customProducts];

    // Shuffle products for variety
    const shuffled = combined.sort(() => 0.5 - Math.random());

    return shuffled;
  } catch (error) {
    console.error("API fetch error:", error);
    return customProducts; // Fallback
  }
}
