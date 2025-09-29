import { Link } from "react-router-dom";
import strip from "./strip.png";

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
  categories,
  setEditingProductId,
  handleCancelEdit,
}) {
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const formatPieces = (value) => {
    // لو العدد صحيح 100% رجّعه كـ int
    if (Number.isInteger(value)) return value;
    // لو فيه كسور رجّعه بدقتين عشريتين
    return Number(value).toFixed(2);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: "100%" }}
        className="row shadow-2-m  justify-content-center   "
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className=" col-lg-3 col-md-4 col-sm-6 g-4 mb-4 "
            >
              <div
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 0 3px rgba(172, 172, 172, 0.8)",
                }}
                className={` p-3 h-100 d-flex flex-column justify-content-between ${
                  product.IsRoshetta
                    ? "border-danger border-3 shadow-danger"
                    : ""
                }`}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <div className=" h-100">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className=" w-100 "
                        style={{
                          height: "240px",
                          objectFit: "contain",
                          borderRadius: "8px",
                          marginBottom: "30px",
                          padding: "10px",
                          boxShadow: "0 0px 3px rgba(172, 172, 172, 0.8)",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="card-body d-flex flex-column justify-content-center ">
                    <div>
                      <div>
                        <p className="mb-1  small">
                          {" "}
                          {formatPieces(
                            product.pieces ?? product.stock ?? 0
                          )}{" "}
                          pieces
                        </p>

                        <h4 className="card-title text-truncate mb-3">
                          <Link
                            to={`/product/${product._id}`}
                            className="text-decoration-none text-dark link"
                          >
                            {product.name}
                            <h6 className=" bg-red">
                              {product.IsRoshetta ? "Need a Prescription" : ""}
                            </h6>
                          </Link>
                        </h4>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className=" d-flex">
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
                                  border: "solid 1px green",
                                }}
                                className="btn btn-sm scale-btn bg-success"
                                onClick={() =>
                                  handleAdd(product, 1, { unit: "strip" })
                                }
                                disabled={
                                  product.pieces === 0 ||
                                  product.IsRoshetta == true
                                }
                              >
                                <img
                                  src={strip}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    fontSize: "900px",
                                  }}
                                  className="bg-success"
                                />
                              </button>

                              <button
                                style={{
                                  height: "50px",
                                  width: "50px",
                                  borderRadius: "50%",
                                  fontSize: "25px",
                                }}
                                className="btn btn-sm btn-outline-success scale-btn"
                                onClick={() =>
                                  handleAdd(product, 1, { unit: "box" })
                                }
                                disabled={
                                  product.pieces === 0 ||
                                  product.IsRoshetta == true
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
                                fontSize: "25px",
                                color: "white",
                              }}
                              className="btn btn-sm bg-success scale-btn"
                              onClick={() =>
                                handleAdd(product, 1, { unit: "box" })
                              }
                              disabled={
                                product.pieces === 0 ||
                                product.IsRoshetta == true
                              }
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
                            onClick={() => handleDeleteProduct(product._id)}
                          >
                            Delete
                          </button>
                        </div>

                        {editingProductId === product._id && (
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              handleUpdate(product._id, editedProduct);
                            }}
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
                              type="file"
                              accept="image/*"
                              className="form-control mb-2"
                              onChange={(e) =>
                                setEditedProduct({
                                  ...editedProduct,
                                  imageFile: e.target.files?.[0] ?? null,
                                })
                              }
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
                                id={`isStrip-${product._id}`}
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
                                htmlFor={`isStrip-${product._id}`}
                              >
                                Has Strips
                              </label>
                            </div>

                            <div className="d-flex gap-2">
                              <button
                                type="submit"
                                className="btn btn-success btn-sm"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                onClick={() => {
                                  if (typeof handleCancelEdit === "function")
                                    handleCancelEdit();
                                  else
                                    setEditingProductId &&
                                      setEditingProductId(null);
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    )}
                  </div>
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
              placeholder="Available-pieces"
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
              type="file"
              accept="image/*"
              className="form-control mb-2"
              onChange={(e) =>
                setNewProduct({ ...newProduct, imageFile: e.target.files[0] })
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
              {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
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
    </div>
  );
}

export default ProductList;
