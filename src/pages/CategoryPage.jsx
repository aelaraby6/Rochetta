
import { useParams } from "react-router-dom";
import products from "../data";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="container mt-4">
      <h2 className="text-capitalize mt-5 mb-4">
        {categoryName.replace(/-/g, " ")}
      </h2>

      <div className="row">
        {filteredProducts.length === 0 ? (
          <p>لا توجد منتجات في هذا التصنيف.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  className="card-img-top w-50"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text fw-bold">${product.price} </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;