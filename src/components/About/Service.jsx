
import { CheckCircle } from "lucide-react"
import { aboutContent } from "../../data/about-data"
import { useInView } from "../../shared/hooks/UseInView"
import service from "../../assets/image/service-tramessy.jpeg"

const ServicesSection = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  const { title, paragraph, list, image } = aboutContent.services

  return (
    <section id="service" ref={sectionRef} className="w-full py-16 bg-section-bg-light text-gray-800">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h2
            className={`text-2xl md:text-3xl text-gray-700 font-bold mb-6 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
          >
            {title}
          </h2>
          <p
            className={`text-md md:text-md leading-relaxed mb-8 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
            style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}
          >
            {paragraph}
          </p>
          <ul className="text-gray-600 text-md space-y-3 text-left">
            {list.map((item, index) => (
              <li
                key={index}
                className={`flex items-start gap-2 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
                style={{ animationDelay: isSectionInView ? `${0.4 + index * 0.1}s` : "0s" }}
              >
                <CheckCircle className="w-6 h-6 text-feature-icon flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Area */}
        <div
          className={`flex-1 flex justify-center lg:justify-end ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
        >
          <img
            src={service || "/placeholder.svg?height=300&width=400"}
            alt="Services illustration"
            className="max-w-full h-auto object-contain rounded-lg"
            // style={{ maxWidth: "600px" }}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
