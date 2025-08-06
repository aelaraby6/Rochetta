import ProductList from "../../components/ProductList/ProductList";

function SkinCare({
  products,
  handleAdd,
  user,
  handleEdit,
  handleDeleteProduct,
  handleUpdate,
  editedProduct,
  editingProductId,
  setEditedProduct,
  searchTerm
}) {
  const filtered = products.filter((p) => p.category === "skin-care");

  return (
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
    />
  );
}
export default SkinCare;
