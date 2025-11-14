// src/pages/Shop.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../api/productsAPI";
import Pagination from "../components/Pagination";
import { customProducts } from "../api/customProducts";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const itemsPerPage = 15; // 5x3 grid

  const filters = ["All", "Fashion", "Watch", "Electronics", "Anime"];

  const loadProducts = async (selectedFilter) => {
    setLoading(true);
    try {
      let apiCategory = null;
      switch (selectedFilter) {
        case "Fashion":
          apiCategory = "Fashion";
          break;
        case "Watch":
          apiCategory = "Watch";
          break;
        case "Electronics":
          apiCategory = "Electronics";
          break;
        case "Anime":
        case "All":
        default:
          apiCategory = null;
          break;
      }

      // Fetch API products
      const apiProducts =
        apiCategory && apiCategory !== "Anime"
          ? await fetchProducts(apiCategory)
          : await fetchProducts(); // fetch all allowed API products

      // Combine products
      const allProducts =
        selectedFilter === "Anime"
          ? customProducts
          : selectedFilter === "All"
          ? [...apiProducts, ...customProducts] // combine everything
          : [...apiProducts];

      setProducts(allProducts);
      setCurrentPage(1); // Reset to first page
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts(filter);
  }, [filter]);

  if (loading) return <p>Loading products...</p>;

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="shop container">
      <h2>Shop</h2>

      {/* Filter Buttons */}
      <div className="shop-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Shop;
