// src/api/productsAPI.js
import { customProducts } from "./customProducts";

const API_URL = "https://dummyjson.com/products?limit=100";

/**
 * Fetch products from API with optional category filter
 * @param {string|null} category - "All", "Fashion", "Watch", "Electronics"
 */
export async function fetchProducts(category = null) {
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
      "mens-watches",
      "womens-watches",
      "smartphones",
      "laptops",
    ];

    // Filter API products based on allowedCategories
    let filtered = data.products
      .filter((p) => allowedCategories.includes(p.category))
      .map((p) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        price: p.price,
        category: p.category,
        images: p.images && p.images.length ? p.images : [p.thumbnail],
      }));

    // Apply category filter
    if (category && category !== "All") {
      switch (category) {
        case "Fashion":
          filtered = filtered.filter(
            (p) =>
              ["mens-shirts", "mens-shoes", "womens-dresses", "womens-shoes"].includes(
                p.category
              )
          );
          break;
        case "Watch": // Corrected filter
          filtered = filtered.filter((p) =>
            ["mens-watches", "womens-watches"].includes(p.category)
          );
          break;
        case "Electronics":
          filtered = filtered.filter((p) => ["smartphones", "laptops"].includes(p.category));
          break;
        default:
          break;
      }
    }

    // Limit API products to 30
    const apiProducts = filtered.slice(0, 30);

    return apiProducts;
  } catch (error) {
    console.error("API fetch error:", error);
    return []; // Fallback is empty array; Anime is handled in Shop.jsx
  }
}
