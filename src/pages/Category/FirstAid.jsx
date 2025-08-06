import ProductList from "../../components/ProductList/ProductList";

function FirstAid({
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
  const filtered = products.filter((p) => p.category === "first-aid");

  return (
    <ProductList
      products={filtered}
      user={user}
      searchTerm={searchTerm}
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
export default FirstAid;
