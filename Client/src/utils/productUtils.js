
export const mapProduct = (p) => ({
    _id: p._id || p.id,
    name: p.name,
    desc: p.description || p.desc || "",
    price: p.price,
    image: p.image || "",
    pieces: typeof p.stock !== "undefined" ? p.stock : p.pieces || 0,
    IsRoshetta: !!(p.requires_prescription || p.IsRoshetta),
    stripsPerBox: p.strip_count ?? p.stripsPerBox ?? 0,
    category: p.category,
    top_selling: p.top_selling ?? false,
    raw: p,
});


export const getStripsPerBox = (product) => 
    Number(product.stripsPerBox ?? product.strip_count ?? 0);