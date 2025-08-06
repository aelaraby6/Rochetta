import ProductList from "../../components/ProductList/ProductList";

function ChildBabyCare({
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
  handleAddNewProduct
}) {
  const filtered = products.filter((p) => p.category === "child-and-baby-care");

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
        newProduct={newProduct}
      setNewProduct={setNewProduct}
      handleAddNewProduct={handleAddNewProduct}
    />
  );
}
export default ChildBabyCare;
