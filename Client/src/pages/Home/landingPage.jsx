import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
  ShoppingCart,
  Star,
} from "lucide-react";
import toast from "react-hot-toast";
import { useGetProductsQuery } from "../../features/products/store/productsApi";
import { useAddToCartMutation } from "../../features/cart/store/cartApi";
import Footer from "../../components/Footer/footer";

import landingImage from "../../assets/Home/doctor.png";
import FirstImg from "../../assets/Home/first.jpg";
import SecondImg from "../../assets/Home/second.jpg";
import ThirdImg from "../../assets/Home/third.jpg";
import ProductOne from "../../assets/Home/product_1.webp";
import ProductTwo from "../../assets/Home/product_2.webp";
import ProductThree from "../../assets/Home/product_3.webp";
import ProductFour from "../../assets/Home/product_4.webp";
import OfferOne from "../../assets/Home/offer_1.webp";
import OfferTwo from "../../assets/Home/offer_2.png";
import Abdo from "../../assets/Home/abdo.jpg";
import Selim from "../../assets/Home/selim.jpeg";
import Three from "../../assets/Home/three.jpg";

const localFallback = [
  {
    _id: "1",
    name: "Solgar ESTER 100 PLUS Kapsul",
    price: 43,
    image: ProductOne,
    stripsPerBox: 1,
  },
  {
    _id: "2",
    name: "Cetirizine 50ml Coated Creme",
    price: 43,
    image: ProductTwo,
    stripsPerBox: 1,
  },
  {
    _id: "3",
    name: "Sunscreen® Stick 250ml 50+",
    price: 43,
    image: ProductThree,
    stripsPerBox: 1,
  },
  {
    _id: "4",
    name: "Sunscreen Care 200ml Lotion",
    price: 43,
    image: ProductFour,
    stripsPerBox: 1,
  },
];

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping fees depend on the destination country.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we will send you a tracking number via email.",
  },
];

export default function LandingPage() {
  const { searchTerm } = useSelector((state) => state.ui);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [activeIndex, setActiveIndex] = useState(null);
  const [addToCart] = useAddToCartMutation();

  const { data: productsData, isLoading } = useGetProductsQuery(100);
  const products = productsData?.data || [];

  const productsToShow = useMemo(() => {
    let topSelling = products.filter((p) => p.top_selling);
    let displayProducts = topSelling.length > 0 ? topSelling : products;

    if (displayProducts.length === 0) displayProducts = localFallback;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      displayProducts = displayProducts.filter((p) =>
        p.name.toLowerCase().includes(term),
      );
    }

    return displayProducts.slice(0, 4);
  }, [products, searchTerm]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAddToCart = async (product) => {
    if (!isAuthenticated) {
      toast.error("Please login to add items");
      return;
    }
    try {
      await addToCart({ productId: product._id, quantity: 1 }).unwrap();
      toast.success("Added to cart successfully");
    } catch (err) {
      toast.error("Failed to add to cart", err);
    }
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
      <div className="relative w-full h-[calc(100vh-7px)] overflow-hidden bg-gradient-to-l from-[#0a3c2f] to-[#2c6e49] text-white pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Welcome to Rochetta
              </h1>
              <p className="text-lg md:text-xl text-green-50 mb-8 max-w-2xl mx-auto lg:mx-0">
                Your online pharmacy — delivering trusted medicines and care,
                anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/category/pain-relief"
                  className="px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95"
                >
                  Get Started
                </Link>
                <button className="px-8 py-3 bg-transparent border-2 border-green-400 hover:bg-green-400/20 text-white font-bold rounded-xl transition-all active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl scale-150 -z-10"></div>
              <img
                src={landingImage}
                alt="Doctor"
                className="max-h-[500px] lg:max-h-[600px] object-contain drop-shadow-2xl"
                style={{ animation: "float 4s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Truck,
              title: "Free Shipping",
              desc: "For orders over $199.00",
            },
            {
              icon: ShieldCheck,
              title: "Secure Payment",
              desc: "100% secure payment",
            },
            {
              icon: RefreshCcw,
              title: "Money Back",
              desc: "30 days return policy",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "Friendly customer support",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-green-600 dark:text-green-500" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h5>
              <p className="text-gray-500 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[FirstImg, SecondImg, ThirdImg].map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-md group cursor-pointer"
            >
              <img
                src={img}
                alt="Promo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          {searchTerm
            ? `Search Results for "${searchTerm}"`
            : "Top Selling Products"}
        </h3>

        {isLoading ? (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            Loading products...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
            {productsToShow.length > 0 ? (
              productsToShow.map((product) => (
                <div
                  key={product._id}
                  className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <Link
                    to={`/product/${product._id}`}
                    className="block h-48 mb-4 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800 p-2"
                  >
                    <img
                      src={product.image || "/placeholder.png"}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                    />
                  </Link>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <h6 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-green-600 transition-colors">
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                  </h6>
                  <div className="mt-auto">
                    <p className="text-xl font-black text-gray-900 dark:text-white mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No products match your search.
              </div>
            )}
          </div>
        )}
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={OfferOne}
            alt="Offer 1"
            className="w-full h-auto rounded-2xl shadow-md"
          />
          <img
            src={OfferTwo}
            alt="Offer 2"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>
      </div>

      <div className="w-full bg-gray-100 dark:bg-[#1a1a1a] py-16 transition-colors duration-300">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: Abdo,
                name: "Abdelrahman Elaraby",
                text: "Excellent service! The delivery was fast and the products are top quality.",
                rating: 5,
              },
              {
                img: Selim,
                name: "Abdelrahman Selim",
                text: "Very professional staff and great customer support. Highly recommended!",
                rating: 5,
              },
              {
                img: Three,
                name: "Omar Khaled",
                text: "Affordable prices and authentic products. Will order again for sure.",
                rating: 4,
              },
            ].map((client, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#252525] p-8 rounded-2xl text-center shadow-sm border border-gray-100 dark:border-gray-800 relative pt-14 mt-8"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-24 h-24 rounded-full object-cover absolute -top-12 left-1/2 transform -translate-x-1/2 border-4 border-white dark:border-[#252525] shadow-md"
                />
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                  {client.name}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4 leading-relaxed">
                  "{client.text}"
                </p>
                <div className="flex justify-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < client.rating ? "fill-current" : "text-gray-300 dark:text-gray-600"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? "bg-green-50 dark:bg-green-900/10 border-green-500" : "bg-white dark:bg-[#1e1e1e]"}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span
                  className={`font-semibold text-left ${activeIndex === index ? "text-green-700 dark:text-green-400" : "text-gray-900 dark:text-white"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-2xl font-light transition-transform duration-300 ${activeIndex === index ? "text-green-600 rotate-45" : "text-gray-400"}`}
                >
                  +
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40 py-4 border-t border-green-100 dark:border-green-800" : "max-h-0"}`}
              >
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1.05); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>
    </div>
  );
}
