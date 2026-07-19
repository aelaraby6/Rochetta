import { Link } from "react-router-dom";
import landingImage from "../../../assets/Home/doctor.webp";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-l from-[#0a3c2f] to-[#2c6e49] text-white pt-24 min-h-[85vh] md:min-h-fit flex items-center">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left z-10 pb-12 md:pb-0 lg:pb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to Rochetta
            </h1>
            <p className="text-lg md:text-xl text-green-50 mb-8 max-w-2xl mx-auto md:mx-0">
              Your online pharmacy — delivering trusted medicines and care,
              anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

          <div className="hidden md:flex w-full md:w-1/2 justify-center lg:justify-end items-end relative top-1">
            <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl scale-150 -z-10"></div>
            <img
              src={landingImage}
              alt="Doctor"
              width="417"
              height="625"
              fetchPriority="high"
              className="max-h-[450px] lg:max-h-[600px] w-auto object-contain drop-shadow-2xl"
              style={{ animation: "float 4s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1.05); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>
    </div>
  );
}
