// src/components/Admin/AddProductForm.jsx

import React, { useContext } from 'react';
import { ProductContext } from '../../context/ContextObjects';

const AddProductForm = () => {
    const { 
        newProduct, 
        setNewProduct, 
        handleAddNewProduct, 
        categories 
    } = useContext(ProductContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddNewProduct();
    };

    return (
        <div className="card p-3 mt-4">
            <h5>Add New Product</h5>
            <form onSubmit={handleSubmit}>
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

                <button type="submit" className="btn btn-success">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;