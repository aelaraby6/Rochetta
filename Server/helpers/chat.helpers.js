import { Chat } from "../models/Chat/chat.model.js";
import Product from "../models/Product/product.model.js";
import { Order } from "../models/Order/order.model.js";
import { Cart } from "../models/Cart/cart.model.js";


export const getDbContext = async (userId, userMessage) => {
    let dbContext = "";
    const messageLower = userMessage.toLowerCase();

    const cartKeywords = ["cart", "basket", "my items", "العربة", "سلة", "سلي", "مشترياتي"];

    if (cartKeywords.some(keyword => messageLower.includes(keyword))) {
        try {
            const cart = await Cart.findOne({ user: userId, is_deleted: false }).populate("items.product");

            if (cart && cart.items && cart.items.length > 0) {
                dbContext += `\n[User's Cart Items]:\n`;

                cart.items.forEach((item, index) => {
                    if (item.product) {
                        dbContext += `${index + 1}. Product: ${item.product.name}, Quantity: ${item.quantity}, Price: ${item.price} EGP per ${item.unit || 'box'}\n`;
                    }
                });

                dbContext += `Total Cart Price: ${cart.total_price} EGP\n`;
            } else {
                dbContext += `\n[User's Cart]: The user's cart is currently empty.\n`;
            }
        } catch (err) {
            console.error("Error fetching cart context for chatbot:", err);
        }
    }

    const orderKeywords = ["order", "delivery", "shipped", "delivered", "track", "الطلب", "الطلبات", "طلب", "شحن"];

    if (orderKeywords.some(keyword => messageLower.includes(keyword))) {
        try {
            const orders = await Order.find({ user: userId, is_deleted: false })
                .sort({ createdAt: -1 })
                .limit(3)
                .populate("items.product");
            if (orders && orders.length > 0) {
                dbContext += `\n[User's Recent Orders]:\n`;
                orders.forEach((order, index) => {
                    dbContext += `Order #${index + 1} (ID: ${order._id}):\n`;
                    dbContext += `  Status: ${order.status}\n`;
                    dbContext += `  Total: ${order.total} EGP\n`;
                    dbContext += `  Address: ${order.address.street}, ${order.address.city}\n`;
                    dbContext += `  Date: ${order.createdAt.toDateString()}\n`;
                    dbContext += `  Items:\n`;
                    order.items.forEach(item => {
                        if (item.product) {
                            dbContext += `    - ${item.product.name} (Qty: ${item.quantity}, Price: ${item.price} EGP)\n`;
                        }
                    });
                });
            } else {
                dbContext += `\n[User's Orders]: The user has no orders yet.\n`;
            }
        } catch (err) {
            console.error("Error fetching orders context for chatbot:", err);
        }
    }

    const productKeywords = ["have", "buy", "price", "find", "search", "medicine", "drug", "pill", "tab", "cure", "treatment", "pain", "cold", "flu", "cough", "fever", "diabet", "دواء", "علاج", "سعر", "عندكم", "ابحث", "مسكن", "مضاد", "مرض", "مرضى", "سكر", "ضغط", "صداع", "الم"];
    const seemsLikeProductQuery = productKeywords.some(keyword => messageLower.includes(keyword)) || userMessage.split(/\s+/).length < 5;

    if (seemsLikeProductQuery) {
        try {
            const cleanWords = userMessage
                .replace(/[^\w\s\u0600-\u06FF]/g, '')
                .split(/\s+/)
                .filter(w => w.length > 2);

            let products = [];
            if (cleanWords.length > 0) {
                const queryConditions = cleanWords.map(word => ({
                    $or: [
                        { name: { $regex: word, $options: "i" } },
                        { description: { $regex: word, $options: "i" } }
                    ]
                }));

                products = await Product.find({
                    $or: queryConditions,
                    is_active: true,
                    is_deleted: false
                })
                    .limit(5)
                    .populate("category");
            }

            // If no specific match was found, return top selling/highly rated products as recommendations
            if (products.length === 0) {
                products = await Product.find({ is_active: true, is_deleted: false })
                    .sort({ top_selling: -1, rating: -1 })
                    .limit(5)
                    .populate("category");
            }

            if (products && products.length > 0) {
                dbContext += `\n[Available Pharmacy Products / Search Results]:\n`;
                products.forEach((prod, index) => {
                    dbContext += `${index + 1}. Name: ${prod.name}\n`;
                    dbContext += `   Category: ${prod.category ? prod.category.name : 'General'}\n`;
                    dbContext += `   Price: ${prod.price} EGP\n`;
                    dbContext += `   Description: ${prod.description}\n`;
                    dbContext += `   Stock Status: ${prod.stock > 0 ? `In Stock (${prod.stock})` : 'Out of Stock'}\n`;
                    dbContext += `   Requires Prescription: ${prod.requires_prescription ? 'Yes' : 'No'}\n`;
                });
            }
        } catch (err) {
            console.error("Error searching product context for chatbot:", err);
        }
    }

    return dbContext;
};
