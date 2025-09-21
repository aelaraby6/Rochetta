import ProductList from "../../components/ProductList/ProductList";
import "./productStyle.css"
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
  searchTerm ,
  newProduct,
  setNewProduct,
  handleAddNewProduct
}) {
  const filtered = products.filter((p) => p.category === "Cold and Flu");

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
   <div className=" productStyle"
  
   onMouseEnter={(e) => {
        
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
  
        e.currentTarget.style.boxShadow = "8px 8px 12px rgba(0,0,0,0.08)";
      }}
>
  {/* ===== Description Section ===== */}
  <div style={{ marginBottom: "25px", marginLeft:"20px"}}>
    <h3
      style={{
        fontWeight: "700",
        marginBottom: "12px",
        borderLeft: "4px solid #28a745",
        paddingLeft: "10px",
        color: "#333",
      }}
    >
     Cold and Flu
    </h3>
    <p style={{ margin: 0, color: "#555", lineHeight: "1.7", fontSize: "19px" }}>
       Cold and Flu products help relieve common symptoms such as nasal congestion,
    cough, fever, and headache. For best results, combine medication with rest
    and adequate hydration.
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
export default ColdandFlu;

