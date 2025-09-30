import ProductList from "../../components/ProductList/ProductList";
import "./productStyle.css";
function PainRelief({
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
  setEditingProductId,
  handleCancelEdit,
  categories,
}) {
  const filtered = products.filter(
    (p) =>
      (p.category && p.category.name === "Pain Relief") ||
      p.category === "Pain Relief"
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="productStyle"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        }}
      >
        {/* ===== Description Section ===== */}
        <div className="desc-section">
          <h3 className="desc-title">Pain Relief</h3>
          <p className="desc-text">
            Pain relief products help reduce mild to moderate pain such as
            headaches, muscle aches, and joint pain. Always follow the
            recommended dosage and consult your doctor if symptoms persist.
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

export default PainRelief;
