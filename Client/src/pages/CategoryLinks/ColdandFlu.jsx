import ProductList from "../../components/ProductList/ProductList";
import "./productStyle.css";
function ColdandFlu({
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
      (p.category && p.category.name === "Cold and Flu") ||
      p.category === "Cold and Flu"
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      x
    >
      <div
        className=" productStyle"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "8px 8px 12px rgba(0,0,0,0.08)";
        }}
      >
        {/* ===== Description Section ===== */}
        <div className="desc-section">
          <h3 className="desc-title">Cold and Flu</h3>
          <p className="desc-text">
            Cold and Flu products help relieve common symptoms such as nasal
            congestion, cough, fever, and headache. For best results, combine
            medication with rest and adequate hydration.
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
export default ColdandFlu;
