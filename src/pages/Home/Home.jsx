import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//searchTerm handleAdd products
export default function Home({ setProducts }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    desc: "",
    pieces: "",
    stripsPerBox: "",
  });
  // const [editingProductId, setEditingProductId] = useState(null);
  // const [editedProduct, setEditedProduct] = useState({ name: "", price: "" });

  // const handleDeleteProduct = (id) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this product?"
  //   );
  //   if (confirmDelete) {
  //     setProducts((prev) => prev.filter((p) => p.id !== id));
  //   }
  // };

  

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // const handleEdit = (product) => {
  //   setEditingProductId(product.id);
  //   setEditedProduct({
  //     name: product.name,
  //     price: product.price,
  //     image: product.image,
  //     pieces: product.pieces,
  //   });
  // };

  // const handleUpdate = (e, id) => {
  //   e.preventDefault();
  //   const updatedProducts = products.map((product) =>
  //     product.id === id
  //       ? {
  //           ...product,
  //           name: editedProduct.name,
  //           price: +editedProduct.price,
  //           image: editedProduct.image,
  //           pieces: +editedProduct.pieces,
  //         }
  //       : product
  //   );
  //   setProducts(updatedProducts);
  //   setEditingProductId(null);
  // };
  const handleAddNewProduct = () => {
    const newItem = {
      ...newProduct,
      id: Date.now(),
    };

    setProducts((prev) => [...prev, newItem]);

    setNewProduct({
      name: "",
      price: "",
      image: "",
      desc: "",
    });
  };

  return (
    <>
      {/* <div className="row p-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4 ">
              <div className="card h-100 d-flex flex-column justify-content-between product-card overflow-hidden">
                <div className="product-image-wrapper overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      className="card-img-top w-50 product-img"
                      alt={product.name}
                    />
                  </Link>
                </div>

                <div className="card-body d-flex flex-column justify-content-end">
                  <h5 className="card-title">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none text-dark"
                    >
                      {product.name}
                    </Link>
                  </h5>
                  <p className="card-text">${product.price}</p>
                  <p>Available: {product.pieces} pcs</p>

                  {user?.role !== "admin" && (
                    <>
                      {product.stripsPerBox > 0 ? (
                        <>
                          <button
                            className="btn btn-primary mt-auto"
                            onClick={() =>
                              handleAdd({ ...product, isStrip: true })
                            }
                          >
                            Add Strip
                          </button>
                          <button
                            className="btn btn-outline-primary mt-1"
                            onClick={() =>
                              handleAdd({
                                ...product,
                                isStrip: false,
                                NOI: product.stripsPerBox,
                              })
                            }
                          >
                            Add Box ({product.stripsPerBox} strips)
                          </button>
                        </>
                      ) : (
                        <button
                          className="btn btn-primary mt-auto"
                          onClick={() => handleAdd(product)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </>
                  )}

                  {user?.role === "admin" && (
                    <div className="mt-2 d-flex flex-column gap-2">
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => handleEdit(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </div>

                      {editingProductId === product.id && (
                        <form
                          onSubmit={(e) => handleUpdate(e, product.id)}
                          className="mt-2 d-flex flex-column gap-2"
                        >
                          <input
                            type="text"
                            value={editedProduct.name}
                            onChange={(e) =>
                              setEditedProduct({
                                ...editedProduct,
                                name: e.target.value,
                              })
                            }
                            placeholder="Edit Name"
                          />
                          <input
                            type="number"
                            value={editedProduct.price}
                            onChange={(e) =>
                              setEditedProduct({
                                ...editedProduct,
                                price: e.target.value,
                              })
                            }
                            placeholder="Edit Price"
                          />
                          <input
                            type="text"
                            value={editedProduct.image}
                            onChange={(e) =>
                              setEditedProduct({
                                ...editedProduct,
                                image: e.target.value,
                              })
                            }
                            placeholder="Edit Image URL"
                          />

                          <input
                            type="number"
                            value={editedProduct.pieces}
                            onChange={(e) =>
                              setEditedProduct({
                                ...editedProduct,
                                pieces: +e.target.value,
                              })
                            }
                            placeholder="Edit Pieces Available"
                          />

                          <button
                            type="submit"
                            className="btn btn-success btn-sm"
                          >
                            Save
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p> */}
      {/* )}
      </div> */}
      {user?.role === "admin" && (
        <div className="card p-3 mt-4">
          <h5>Add New Product</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />

          <input
            type="number"
            className="form-control mb-2"
            placeholder="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Available-Peices"
            value={newProduct.pieces}
            onChange={(e) =>
              setNewProduct({ ...newProduct, pieces: +e.target.value })
            }
          />

          <input
            type="number"
            className="form-control mb-2"
            placeholder="Strips-PerUnit"
            value={newProduct.stripsPerBox}
            onChange={(e) =>
              setNewProduct({ ...newProduct, stripsPerBox: +e.target.value })
            }
          />

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Image-URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />

          <textarea
            className="form-control mb-2"
            placeholder="Desc.."
            value={newProduct.desc}
            onChange={(e) =>
              setNewProduct({ ...newProduct, desc: e.target.value })
            }
          />

          <button className="btn btn-success" onClick={handleAddNewProduct}>
            Add
          </button>
        </div>
      )}
    </>
  );
}
