// src/components/Admin/EditProductForm.jsx

import React, { useContext } from 'react';
import { ProductContext } from '../../context/ContextObjects';

const EditProductForm = ({ product }) => {
    const { 
        editedProduct, 
        setEditedProduct, 
        handleUpdate, 
        handleCancelEdit
    } = useContext(ProductContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(product._id, editedProduct);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-2 d-flex flex-column gap-2 p-3 border rounded bg-light"
        >
            <h5>Editing: {product.name}</h5>
            
            <input
                type="text"
                value={editedProduct.name}
                onChange={(e) =>
                    setEditedProduct({ ...editedProduct, name: e.target.value })
                }
                placeholder="Edit Name"
                className="form-control form-control-sm"
            />
            
            <input
                type="number"
                value={editedProduct.price}
                onChange={(e) =>
                    setEditedProduct({ ...editedProduct, price: +e.target.value })
                }
                placeholder="Edit Price"
                className="form-control form-control-sm"
            />

            {/* 3(File Input) */}
            <input
                type="file"
                accept="image/*"
                className="form-control form-control-sm mb-2"
                onChange={(e) =>
                    setEditedProduct({
                        ...editedProduct,
                        imageFile: e.target.files?.[0] ?? null,
                    })
                }
            />

            {/* 4(Pieces Available) */}
            <input
                type="number"
                value={editedProduct.pieces}
                onChange={(e) =>
                    setEditedProduct({ ...editedProduct, pieces: +e.target.value })
                }
                placeholder="Edit Pieces Available"
                className="form-control form-control-sm"
            />
            
            {/* 5(Strips per Box) */}
            <input
                type="number"
                value={editedProduct.stripsPerBox}
                onChange={(e) =>
                    setEditedProduct({ ...editedProduct, stripsPerBox: +e.target.value })
                }
                placeholder="Strips per Box"
                className="form-control form-control-sm"
            />

            {/* 6(Description) */}
            <textarea
                value={editedProduct.desc}
                onChange={(e) =>
                    setEditedProduct({ ...editedProduct, desc: e.target.value })
                }
                placeholder="Edit Description"
                className="form-control form-control-sm"
            />

            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success btn-sm">
                    Save Changes
                </button>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleCancelEdit}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditProductForm;