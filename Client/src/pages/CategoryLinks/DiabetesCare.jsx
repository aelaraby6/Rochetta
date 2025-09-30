import ProductList from "../../components/ProductList/ProductList";

function DiabetesCare({
  products,
  handleAdd,
  user,
  handleEdit,
  handleDeleteProduct,
  handleUpdate,
  editedProduct,
  editingProductId,
  setEditedProduct,
  searchTerm,
  newProduct,
  setNewProduct,
  handleAddNewProduct,
  categories,
  setEditingProductId,
  handleCancelEdit,
}) {
  const filtered = products.filter(
    (p) =>
      (p.category && p.category.name === "Diabetes Care") ||
      p.category === "Diabetes Care"
  );

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="productStyle">
        {/* ===== Description Section ===== */}
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
          products={filtered}
          user={user}
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

// <p style={{ margin: 0, color: "#555", lineHeight: "1.7", fontSize: "19px" }}>
//      Diabetes care products support blood sugar monitoring and management. They
//   include glucose meters, test strips, and supplements that help maintain a
//  healt
