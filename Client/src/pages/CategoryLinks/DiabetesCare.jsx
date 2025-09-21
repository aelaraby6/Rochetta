import ProductList from "../../components/ProductList/ProductList";
import "./productStyle.css"
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
  handleAddNewProduct
}) {
  const filtered = products.filter((p) => p.category === "Diabetes Care");

 return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
   <div className=" productStyle"
   onMouseEnter={(e) => {
      
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {

        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
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
     Diabetes Care
    </h3>
    <p style={{ margin: 0, color: "#555", lineHeight: "1.7", fontSize: "19px" }}>
       Diabetes care products support blood sugar monitoring and management. They
    include glucose meters, test strips, and supplements that help maintain a
   healthy lifestyle for diabetic patients.

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
export default DiabetesCare;

 