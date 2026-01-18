import { aboutContent } from "../../data/about-data"
import { useInView } from "../../shared/hooks/UseInView"
import vissionimg from "../../assets/image/business-man.jpg"
const VisionSection = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  const { title, paragraph, image } = aboutContent.vision

  return (
    <section ref={sectionRef} className="w-full py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        {/* Right Content Area (reversed for lg:flex-row-reverse) */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h2
            className={`text-2xl md:text-3xl text-gray-700 font-bold mb-6 ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
          >
            {title}
          </h2>
          <p
            className={`text-md leading-relaxed text-gray-600 ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
            style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}
          >
            {paragraph}
          </p>
        </div>

        {/* Left Image Area (reversed for lg:flex-row-reverse) */}
        <div
          className={`flex-1 flex justify-center lg:justify-start ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
        >
          <img
            src={vissionimg|| "/placeholder.svg?height=300&width=400"}
            alt="Vision illustration"
            className="max-w-full h-auto object-contain rounded-lg"
            // style={{ maxWidth: "600px" }}
          />
        </div>
      </div>
    </section>
  )
}

export default VisionSection
