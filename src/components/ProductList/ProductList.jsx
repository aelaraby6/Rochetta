
import { Link } from "react-router-dom";

function ProductList ({ products, handleAdd, user ,searchTerm }) {
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
product.desc.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  return (
    <div className="row p-5">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
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
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
