// src/pages/CategoryLinks/DiabetesCare.jsx
import React, { useContext, useMemo } from "react";
import ProductList from "../../components/ProductList/ProductList";
import {
  AuthContext,
  CartContext,
  ProductContext,
} from "../../context/ContextObjects";
function DiabetesCare({ searchTerm }) {
  const { state: authState } = useContext(AuthContext);
  const {
    products,
    categories,
    handleAddNewProduct,
    handleDeleteProduct,
    handleUpdate,
    newProduct,
    setNewProduct,
    editedProduct,
    setEditedProduct,
    editingProductId,
    setEditingProductId,
    handleEdit,
    handleCancelEdit,
  } = useContext(ProductContext);
  const { handleAdd } = useContext(CartContext);
  const categorySlug = "Diabetes Care";
  const filteredProducts = useMemo(() => {
    const categoryFilter = products.filter((p) => {
      const categoryMatch =
        (p.category && p.category.name === categorySlug) ||
        p.category === categorySlug;
      return categoryMatch;
    });
    if (!searchTerm) return categoryFilter;
    const term = searchTerm.toLowerCase();
    return categoryFilter.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        (product.desc && product.desc.toLowerCase().includes(term))
    );
  }, [products, searchTerm]);
  const isAdmin = authState.user && authState.user.role === "admin";
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="productStyle">
        <div className="desc-section">
          <h3 className="desc-title">Diabetes Care</h3>
          <p className="desc-text">
            Diabetes care products support blood sugar monitoring and
            management. They include glucose meters, test strips, and
            supplements that help maintain a healthy lifestyle for diabetic
            patients.
          </p>
        </div>
        <ProductList
          searchTerm={searchTerm}
          products={filteredProducts}
          user={isAdmin ? authState.user : null}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDeleteProduct={handleDeleteProduct}
          handleUpdate={handleUpdate}
          editingProductId={editingProductId}
          editedProduct={editedProduct}
          setEditedProduct={setEditedProduct}
          setEditingProductId={setEditingProductId}
          handleCancelEdit={handleCancelEdit}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          handleAddNewProduct={handleAddNewProduct}
          categories={categories}
        />
      </div>
    </div>
  );
}
export default DiabetesCare;
