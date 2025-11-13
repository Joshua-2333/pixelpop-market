// src/api/productsAPI.js

const API_URL = "https://dummyjson.com/products?limit=100";

export async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();

    // Keep only selected categories
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

    const filtered = data.products.filter((p) =>
      allowedCategories.includes(p.category)
    );

    return filtered;
  } catch (error) {
    console.error("API fetch error:", error);
    return [];
  }
}
