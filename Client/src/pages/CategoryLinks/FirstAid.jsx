import ProductList from "../../components/ProductList/ProductList";
import "./productStyle.css"
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
  searchTerm,
  newProduct,
  setNewProduct,
  handleAddNewProduct
}) {
 // فى FirstAid component
const filtered = products.filter(
  (p) => (p.category && p.category.name === "First Aid") || p.category === "First Aid"
);

   return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
    <h3
     className="desc-title"
    >
      First Aid
    </h3>
    <p className="desc-text">
      First aid products include bandages, antiseptics, and wound care essentials
    that provide quick treatment for minor injuries and help prevent infections.

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
        newProduct={newProduct}
      setNewProduct={setNewProduct}
      handleAddNewProduct={handleAddNewProduct}
    />
    </div> 
    </div>
  );
}
export default FirstAid;
 

  