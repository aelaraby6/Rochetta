import { Star } from "lucide-react";
import Abdo from "../../../assets/Home/abdo.webp";
import Selim from "../../../assets/Home/selim.jpeg";
import Three from "../../../assets/Home/three.webp";

export default function Testimonials() {
  const clients = [
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
  ];

  return (
    <div className="w-full bg-gray-100 dark:bg-[#1a1a1a] py-16 transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#252525] p-8 rounded-2xl text-center shadow-sm border border-gray-100 dark:border-gray-800 relative pt-14 mt-8"
            >
              <img
                src={client.img}
                alt={`Client ${client.name}`}
                loading="lazy"
                className="w-24 h-24 rounded-full object-cover absolute -top-12 left-1/2 transform -translate-x-1/2 border-4 border-white dark:border-[#252525] shadow-md"
              />
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                {client.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 italic mb-4 leading-relaxed">
                "{client.text}"
              </p>
              <div
                className="flex justify-center text-yellow-400"
                role="img"
                aria-label={`Rating: ${client.rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < client.rating
                        ? "fill-current"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
