const API_URL = 'https://api.escuelajs.co/api/v1/products';

export async function fetchProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}
