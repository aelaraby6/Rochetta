import { Link } from "react-router-dom";

function ProductList({
  products,
  handleAdd,
  user,
  searchTerm,
  handleDeleteProduct,
  handleEdit,
  handleUpdate,
  setEditedProduct,
  editingProductId,
  editedProduct,
  newProduct,
  setNewProduct,
  handleAddNewProduct,
}) {
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="row p-5 justify-content-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 m-5">
              <div className="card h-100 shadow-sm border-1 d-flex flex-column justify-content-between">
                <div className="p-2">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className=" w-100 "
                      style={{
                        maxHeight: "230px",
                        objectFit: "contain",
                        opacity: 0.7,
                        marginBottom: "8px",
                      }}
                    />
                  </Link>
                </div>

                <div className="card-body d-flex flex-column justify-content-between pt-0">
                  <div>
                    <p className="mb-0 small">{product.pieces} pieces</p>

                    <h3 className="card-title text-truncate mb-3">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {product.name}
                      </Link>
                    </h3>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div>
                      <p className="mb-1 fs-4 fw-bold">${product.price}</p>
                    </div>

                    {user?.role !== "admin" && (
                      <div className="d-flex gap-2">
                        {product.stripsPerBox > 0 ? (
                          <>
                            <button
                              style={{
                                height: "50px",
                                width: "50px",
                                borderRadius: "50%",
                              }}
                              className="btn btn-sm btn-success scale-btn"
                              onClick={() =>
                                handleAdd({ ...product, isStrip: true })
                              }
                            >
                              <i className="bi bi-building-fill-add"></i>
                            </button>

                            <button
                              style={{
                                height: "50px",
                                width: "50px",
                                borderRadius: "50%",
                              }}
                              className="btn btn-sm btn-outline-success scale-btn"
                              onClick={() =>
                                handleAdd({
                                  ...product,
                                  isStrip: false,
                                  NOI: product.stripsPerBox,
                                })
                              }
                            >
                              <i className="bi bi-cart-plus"></i>
                            </button>
                          </>
                        ) : (
                          <button
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                            }}
                            className="btn btn-sm btn-success scale-btn"
                            onClick={() => handleAdd(product)}
                          >
                            <i className="bi bi-cart-plus"></i>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  {user?.role === "admin" && (
                    <div className="mt-2 d-flex flex-column gap-2">
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-warning "
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
                            className="form-control"
                          />

                          <input
                            type="number"
                            value={editedProduct.price}
                            onChange={(e) =>
                              setEditedProduct({
                                ...editedProduct,
                                price: +e.target.value,
                              })
                            }
                            placeholder="Edit Price"
                            className="form-control"
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
                            className="form-control"
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
                            className="form-control"
                          />

                          <input
                            type="number"
                            value={editedProduct.stripsPerBox}
                            onChange={(e) =>
                              setEditedProduct({
                                ...editedProduct,
                                stripsPerBox: +e.target.value,
                              })
                            }
                            placeholder="Strips per Box"
                            className="form-control"
                          />

                          <textarea
                            value={editedProduct.desc}
                            onChange={(e) =>
                              setEditedProduct({
                                ...editedProduct,
                                desc: e.target.value,
                              })
                            }
                            placeholder="Edit Description"
                            className="form-control"
                          />

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id={`isStrip-${product.id}`}
                              checked={editedProduct.isStrip || false}
                              onChange={(e) =>
                                setEditedProduct({
                                  ...editedProduct,
                                  isStrip: e.target.checked,
                                })
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`isStrip-${product.id}`}
                            >
                              Has Strips
                            </label>
                          </div>

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
          <p>No products found.</p>
        )}
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

            <select
              className="form-control mb-2"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <option value="pain-relief">Pain Relief</option>
              <option value="cold-and-flu">Cold and Flu</option>
              <option value="first-aid">First Aid</option>
              <option value="diabetes-care">Diabetes Care</option>
            </select>

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
      </div>
    </>
  );
}

export default ProductList;
