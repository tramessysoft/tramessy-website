import { aboutContent } from "../../data/about-data"
import { useInView } from "../../shared/hooks/UseInView"
import missionImg from "../../assets/image/planning.jpg"


const MissionSection = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  const { title, paragraph, image } = aboutContent.mission

  return (
    <section ref={sectionRef} className="w-full py-16 bg-section-bg-light text-gray-800">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h2
            className={`text-2xl md:text-3xl text-gray-700 font-bold mb-6 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
          >
            {title}
          </h2>
          <p
            className={`text-md leading-relaxed text-gray-600 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
            style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}
          >
            {paragraph}
          </p>
        </div>

        {/* Right Image Area */}
        <div
          className={`flex-1 flex justify-center lg:justify-end ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
        >
          <img
            src={missionImg || "/placeholder.svg?height=300&width=400"}
            alt="Mission illustration"
            className="max-w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default MissionSection
