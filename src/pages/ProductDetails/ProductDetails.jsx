import { useParams } from "react-router-dom";

export default function ProductDetails({ handleAdd, products }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div
      style={{ marginTop: "150px", marginLeft: "50px" }}
      className="row w-75"
    >
      <div className="col-md-6">
        <img src={product.image} alt={product.name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.desc}</p>
        <button className="btn btn-primary" onClick={() => handleAdd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
