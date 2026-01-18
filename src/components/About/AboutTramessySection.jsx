import { aboutContent } from "../../data/about-data"
import { useInView } from "../../shared/hooks/UseInView"
// import tramessyTeam from "../../assets/image/team-tramessy.jpg"
import tramessyTeam from "../../assets/image/team.jpg"

const AboutTramessySection = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  const { title, paragraphs, image } = aboutContent.aboutTramessy

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 "
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h2
            className={`text-2xl md:text-3xl text-gray-700 font-bold mb-6 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
          >
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-md mb-4 text-gray-600 leading-relaxed ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
              style={{ animationDelay: isSectionInView ? `${0.2 + index * 0.1}s` : "0s" }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right Image Area */}
        <div
          className={`flex-1 flex justify-center lg:justify-end ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
        >
          <img
            src={tramessyTeam || "/placeholder.svg?height=400&width=600"}
            alt="Tramessy team working"
            className="max-w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutTramessySection
