import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
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
import Footer from "../../components/Footer/footer";
import { useState } from "react";

const Landing = ({ handleAdd }) => {
  const products = [
    {
      id: 1,
      name: "Solgar ESTER 100 PLUS Kapsul",
      price: 43,
      image: ProductOne,
    },
    {
      id: 2,
      name: "Cetirizine 50ml Coated Creme",
      price: 43,
      image: ProductTwo,
    },
    {
      id: 3,
      name: "Sunscreen® Stick 250ml 50+",
      price: 43,
      image: ProductThree,
    },
    {
      id: 4,
      name: "Sunscreen Care 200ml Lotion",
      price: 43,
      image: ProductFour,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="landing-container vh-100 d-flex align-items-stretch text-white">
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <p className="display-4 fw-bold">Welcome to PharmaXpress</p>
              <p className="lead">
                Bringing healthcare to your home — your trusted source for
                authentic Egyptian prescriptions and services.
              </p>
              <div className="mt-4">
                <button className="btn btn-success me-3">Get Started</button>
                <button className="btn btn-outline-light">Learn More</button>
              </div>
            </div>

            <div className="col-md-6 p-0">
              <div className="h-100 d-flex justify-content-center align-items-end">
                <img src={landingImage} alt="Doctor" className="doctor-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*icons section */}

      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div>
              <div className="icon-circle">
                <i className="bi bi-truck text-success"></i>
              </div>
              <h5 className="mt-3">Free Shipping & Returns</h5>
              <p className="text-muted">For all orders over $199.00</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div>
              <div className="icon-circle">
                <i className="bi bi-shield-lock text-success"></i>
              </div>
              <h5 className="mt-3">Secure Payment</h5>
              <p className="text-muted">We ensure secure payment</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div>
              <div className="icon-circle">
                <i className="bi bi-arrow-repeat text-success"></i>
              </div>
              <h5 className="mt-3">Money Back Guarantee</h5>
              <p className="text-muted">Returning money 30 days</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div>
              <div className="icon-circle">
                <i className="bi bi-headset text-success"></i>
              </div>
              <h5 className="mt-3">24/9 Customer Support</h5>
              <p className="text-muted">Friendly customer support</p>
            </div>
          </div>
        </div>
      </div>

      {/* photos cards */}

      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="promo-card">
              <img
                src={FirstImg}
                alt="Anti-age Skin Serum"
                className="img-fluid rounded"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="promo-card">
              <img
                src={SecondImg}
                alt="Natural Wealth Beta karoten"
                className="img-fluid rounded"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="promo-card">
              <img
                src={ThirdImg}
                alt="Eucerin Skin Care"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* top products */}

      <div className="container my-5">
        <h3 className="mb-4">Top Selling Products</h3>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-md-3">
              <div key={product.id} className="product-card p-3 border rounded land">
                <img
                  src={product.image}
                  alt="Product 1"
                  className="img-fluid mb-3"
                />
                <div className="text-warning mb-2">★★★★★</div>
                <h6>Solgar ESTER 100 PLUS Kapsul</h6>
                <p className="fw-bold">$43.00</p>
                <button
                  onClick={() =>
                    handleAdd({
                      ...product,
                      isStrip: false,
                      NOI: product.stripsPerBox,
                    })
                  }
                  className="btn btn-success w-100"
                >
                  <i className="bi bi-cart me-2"></i>Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offers photos */}

      <div className="container my-5">
        <div className="row g-3">
          <div className="col-md-6">
            <img
              src={OfferOne}
              alt="Image 1"
              className="w-100 h-100 rounded offer-img"
            />
          </div>
          <div className="col-md-6">
            <img
              src={OfferTwo}
              alt="Image 2"
              className="w-100 h-100 rounded offer-img"
            />
          </div>
        </div>
      </div>

      {/*clients  */}

      <div className="container my-5 ">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div className="row g-4 ">
          <div className="col-md-4 bg-">
            <div className="card h-100 text-center p-3 shadow-sm land ">
              <img
                src={Abdo}
                alt="Client 1"
                className="rounded-circle mx-auto mb-3 client-img"
              />
              <h5>Abdelrahman Elaraby</h5>
              <p style={{opacity:".7"}}>
                "Excellent service! The delivery was fast and the products are
                top quality."
              </p>
              <div className="text-warning">★★★★★</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-3 shadow-sm">
              <img
                src={Selim}
                alt="Client 2"
                className="rounded-circle mx-auto mb-3 client-img"
              />
              <h5>Abdelrahman Selim</h5>
              <p style={{opacity:".7"}}>
                "Very professional staff and great customer support. Highly
                recommended!"
              </p>
              <div className="text-warning">★★★★★</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-3 shadow-sm">
              <img
                src="https://via.placeholder.com/80"
                alt="Client 3"
                className="rounded-circle mx-auto mb-3 client-img"
              />
              <h5>Omar Khaled</h5>
              <p style={{opacity:".7"}}>
                "Affordable prices and authentic products. Will order again for
                sure."
              </p>
              <div className="text-warning">★★★★☆</div>
            </div>
          </div>
        </div>
      </div>

      {/* questions */}

      <div className="faq-section">
        <h2 className="my-5">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""} land `}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Landing;
