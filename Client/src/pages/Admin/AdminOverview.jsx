import React, { useContext, useMemo } from "react";
import { ProductContext } from "../../context/ContextObjects";
const AdminOverview = () => {
  const { products, categories } = useContext(ProductContext);
  const stats = useMemo(() => {
    const totalProducts = products.length;
    const outOfStock = products.filter((p) => p.pieces <= 0).length;
    const prescriptionRequired = products.filter((p) => p.IsRoshetta).length;
    return {
      totalProducts,
      categoriesCount: categories.length,
      outOfStock,
      prescriptionRequired,
    };
  }, [products, categories]);
  return (
    <div className="admin-overview">
      <h2 className="mb-4">System Overview</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card text-center bg-primary text-white shadow">
            <div className="card-body">
              <h3 className="card-title">{stats.totalProducts}</h3>
              <p className="card-text">Total Products</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-info text-dark shadow">
            <div className="card-body">
              <h3 className="card-title">{stats.categoriesCount}</h3>
              <p className="card-text">Product Categories</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-warning text-dark shadow">
            <div className="card-body">
              <h3 className="card-title">{stats.outOfStock}</h3>
              <p className="card-text">Low/Out of Stock</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-danger text-white shadow">
            <div className="card-body">
              <h3 className="card-title">{stats.prescriptionRequired}</h3>
              <p className="card-text">Requires Prescription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminOverview;
