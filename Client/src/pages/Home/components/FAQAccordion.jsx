import { useState } from "react";

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

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? "bg-green-50 dark:bg-green-900/10 border-green-500"
                : "bg-white dark:bg-[#1e1e1e]"
            }`}
          >
            <button
              aria-expanded={activeIndex === index}
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span
                className={`font-semibold text-left ${
                  activeIndex === index
                    ? "text-green-700 dark:text-green-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`text-2xl font-light transition-transform duration-300 ${
                  activeIndex === index
                    ? "text-green-600 rotate-45"
                    : "text-gray-400"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-40 py-4 border-t border-green-100 dark:border-green-800"
                  : "max-h-0"
              }`}
            >
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
