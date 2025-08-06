import ProductList from "../../components/ProductList/ProductList";

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
  searchTerm 
}) {
  const filtered = products.filter((p) => p.category === "cold-and-flu");

  return (
    <ProductList
      products={filtered}
      user={user}
      handleAdd={handleAdd}
      searchTerm={searchTerm}
      handleEdit={handleEdit}
      handleDeleteProduct={handleDeleteProduct}
      handleUpdate={handleUpdate}
      editingProductId={editingProductId}
      editedProduct={editedProduct}
      setEditedProduct={setEditedProduct}
    />
  );
}
export default ColdandFlu;
