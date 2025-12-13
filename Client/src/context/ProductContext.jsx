
import React, { useState, useEffect, useMemo, useCallback } from "react";
import api from "../api";
import data from "../data";
import { mapProduct, getStripsPerBox } from "../utils/productUtils";
import { ProductContext } from "./ContextObjects";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : data;
  });
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false); 

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    imageFile: null,
    image: "",
    desc: "",
    pieces: "",
    category: "",
    stripsPerBox: "",
    requires_prescription: false,
  });
  const [editedProduct, setEditedProduct] = useState({ name: "", price: "" });
  const [editingProductId, setEditingProductId] = useState(null); 

  const updateProductInList = useCallback((id, updatedData) => {
    setProducts((prev) =>
      prev.map((p) =>
        String(p._id ?? p.id) === String(id) ? mapProduct(updatedData) : p
      )
    );
  }, []); 

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsRes, categoriesRes, featuredRes] = await Promise.all([
          api.get("/products?limit=100"),
          api.get("/category"),
          api.get("/products?top_selling=true&limit=4"),
        ]);

        if (!mounted) return;

        const items = (productsRes.data?.data || []).map(mapProduct);
        setProducts(items.length ? items : data);
        localStorage.setItem(
          "products",
          JSON.stringify(items.length ? items : data)
        );

        setCategories(categoriesRes.data?.data || []);
        setFeaturedProducts((featuredRes.data?.data || []).map(mapProduct));
      } catch (err) {
        console.error("Failed to fetch products/categories:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []); 

  const handleAddNewProduct = useCallback(async () => {
    const catObj = categories.find((c) => c._id === newProduct.category);

    try {
      if (!newProduct.name || !newProduct.price || !newProduct.category) {
        alert("Please provide name, price and category");
        return;
      }

      const form = new FormData();
      form.append("name", newProduct.name);
      form.append("description", newProduct.desc || "");
      form.append("price", String(newProduct.price));
      form.append("category", newProduct.category);
      form.append("stock", String(newProduct.pieces || 0));
      form.append("has_strips", String(!!newProduct.stripsPerBox));
      form.append("strip_count", String(newProduct.stripsPerBox || 0));
      form.append(
        "requires_prescription",
        String(!!newProduct.requires_prescription)
      );

      if (newProduct.imageFile) {
        form.append("image", newProduct.imageFile);
      }

      const res = await api.post("/products", form);

      let created = mapProduct(res.data.data);

      if (
        created &&
        created.category &&
        typeof created.category === "string" &&
        catObj
      ) {
        created.category = catObj;
      }

      setProducts((prev) => [...prev, created]); 

      setNewProduct({
        name: "",
        price: "",
        image: "",
        imageFile: null,
        desc: "",
        pieces: "",
        category: "",
        stripsPerBox: "",
        requires_prescription: false,
      });
    } catch (err) {
      console.error("Error adding product:", err);
      alert(err.response?.data?.message || "Failed to add product");
    }
  }, [newProduct, categories]);

  const handleUpdate = useCallback(
    async (id, updatedProduct) => {
      let res; 
      try {
        const allowed = {
          name: updatedProduct.name,
          description: updatedProduct.desc,
          price:
            typeof updatedProduct.price !== "undefined"
              ? Number(updatedProduct.price)
              : undefined,
          category: updatedProduct.category, 
          stock:
            typeof updatedProduct.pieces !== "undefined"
              ? Number(updatedProduct.pieces)
              : undefined,
          has_strips:
            typeof updatedProduct.stripsPerBox !== "undefined"
              ? Boolean(updatedProduct.stripsPerBox > 0)
              : undefined,
          strip_count:
            typeof updatedProduct.stripsPerBox !== "undefined"
              ? Number(updatedProduct.stripsPerBox)
              : undefined,
          requires_prescription:
            typeof updatedProduct.requires_prescription !== "undefined"
              ? Boolean(updatedProduct.requires_prescription)
              : undefined,
        };

        const payloadObj = Object.fromEntries(
          Object.entries(allowed).filter(([, v]) => typeof v !== "undefined")
        );

        if (updatedProduct.imageFile) {
          const form = new FormData();
          Object.entries(payloadObj).forEach(([k, v]) =>
            form.append(k, String(v))
          );
          form.append("image", updatedProduct.imageFile);
          res = await api.patch(`/products/${id}`, form); 
        } else {
          if (Object.keys(payloadObj).length === 0) {
            alert("No changes to update");
            return;
          }
          res = await api.patch(`/products/${id}`, payloadObj);
        } 

        updateProductInList(id, res.data.data);

        setEditingProductId(null);
        setEditedProduct({ name: "", price: "" });
      } catch (err) {
        console.error("Error updating product:", err);
        alert(
          err.response?.data?.message ||
            "Failed to update product. Check console."
        );
      }
    },
    [updateProductInList, setEditingProductId, setEditedProduct] 
  );
  const handleDeleteProduct = useCallback(async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product. Check console.");
    }
  }, []);

  const handleEdit = useCallback((product) => {
    setEditingProductId(product._id);
    setEditedProduct({
      name: product.name,
      price: product.price,
      image: product.image,
      imageFile: null,
      pieces: product.pieces,
      stripsPerBox: product.stripsPerBox,
      desc: product.desc,
      category:
        product.category && product.category._id
          ? product.category._id
          : product.category || "",
    });
  }, []);
  const handleCancelEdit = useCallback(() => {
    setEditingProductId(null);
    setEditedProduct({ name: "", price: "" });
  }, []);

  const getStrips = useMemo(() => getStripsPerBox, []); 

  const contextValue = useMemo(
    () => ({
      products,
      setProducts,
      featuredProducts,
      categories,
      loading,
      updateProductInList,
      getStrips, 
      newProduct,
      setNewProduct,
      editedProduct,
      setEditedProduct,
      editingProductId,
      setEditingProductId,
      handleAddNewProduct,
      handleDeleteProduct,
      handleUpdate,
      handleEdit,
      handleCancelEdit,
    }),
    [
      products,
      featuredProducts,
      categories,
      loading,
      newProduct,
      editedProduct,
      editingProductId,
      handleAddNewProduct,
      handleDeleteProduct,
      handleUpdate,
      handleEdit,
      handleCancelEdit,
      updateProductInList,
      getStrips,
    ]
  );
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
