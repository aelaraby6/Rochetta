import { lazy, Suspense } from "react";

import HeroSection from "./components/HeroSection";
import FeatureCards from "./components/FeatureCards";
import globalLoader from "../../components/ui/GlobalLoader";
const PromoBanners = lazy(() => import("./components/PromoBanners"));
const TopProducts = lazy(() => import("./components/TopProducts"));
const SpecialOffers = lazy(() => import("./components/SpecialOffers"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQAccordion = lazy(() => import("./components/FAQAccordion"));

export default function LandingPage() {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
      <HeroSection />
      <FeatureCards />

      <Suspense fallback={<globalLoader/>}>
        <PromoBanners />
        <TopProducts />
        <SpecialOffers />
        <Testimonials />
        <FAQAccordion />
      </Suspense>
    </div>
  );
}
