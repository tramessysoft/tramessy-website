
import { ArrowDown } from "lucide-react";
import dekstopImage from "../../assets/image/truck-seba-dash-dekstop.png";
import smallImage from "../../assets/image/mobile.png";
import { useEffect, useRef, useState } from "react";
import { useInView } from "../../shared/hooks/UseInView";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      const el = imageRef.current;
      if (el) {
        // Remove animation class to force reflow
        el.classList.remove("animate-bounce-slow");
        void el.offsetWidth; // trigger reflow
        el.classList.add("animate-bounce-slow");
      }
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // hero content
  const heroContent = {
    title: t("hero.title"),
    description: t("hero.description"),
    ctaText: t("hero.cta"),
    mainImage: dekstopImage,
    smallImage: smallImage,
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  // grid lg:grid-cols-2 gap-12 lg:gap-20
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-teal-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center">
          {/* Left Content */}
          <div
            ref={sectionRef}
            className="text-white space-y-8 animate-fade-in-up md:w-[50%]"
          >
            <h1
              className={`text-2xl lg:text-4xl font-bold leading-tight ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
              style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}
            >
              {heroContent.title}
            </h1>

            <p
              className={` text-sm lg:text-md text-white/90 leading-relaxed ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
              style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}
            >
              {heroContent.description}
            </p>

            <Link to="/contact-us" className="mt-6 block">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-lg text-sm text-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 group">
                <span>{heroContent.ctaText}</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-right md:w-[40%]">
            <div className="relative transform  transition-transform duration-700 w-full">
              {/* Main Dashboard Image */}
              <div className="relative">
                <img
                  src={heroContent.mainImage || "/placeholder.svg"}
                  alt="Edufy Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Small Jumping Image */}
              <div className="absolute -bottom-12 -left-12  ">
                <div
                  ref={imageRef}
                  className={`p-4 w-36 lg:w-48 transform  animate-bounce-slow`}
                >
                  <img
                    src={heroContent.smallImage || "placeholder.svg"}
                    alt="mobile response"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center animate-bounce opacity-80">
                <span className="text-white font-bold text-2xl">📊</span>
              </div> */}
              {/* <div className="absolute top-1/2 -left-6 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center animate-pulse opacity-70">
                <span className="text-white font-bold text-lg">🎓</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollDown}
          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors"
        >
          <ArrowDown className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}
