
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import nalitabari from "../../assets/logo/nalitabari-logo.png"
import truckSeba from "../../assets/logo/truck-seba-logo.jpg"
import hkLogistices from "../../assets/logo/hk-logistics-logo.jpg"
import bus from "../../assets/logo/bus-logo.png"
import parkline from "../../assets/logo/parkline-logo.png"
import laksham from "../../assets/logo/laksham.png"
import AjEnter from "../../assets/logo/AJ_Logo.png"
import sls from "../../assets/logo/sls-logo-favicon.webp"
import asif from "../../assets/logo/asif.jpg"
import opu from "../../assets/logo/opu.jpg"
import { useInView } from "../../shared/hooks/UseInView"
import noImage from "../../assets/logo/download.png"

const company = [
  {
    id: 1,
    name: "Nalitabari",
    logo: nalitabari,
    bgColor: "bg-white",
    borderColor: "border-red-500",
  },
  {
    id: 2,
    name: "Truck Seba",
    logo: truckSeba,
    bgColor: "bg-blue-600",
    borderColor: "border-yellow-400",
  },
  {
    id: 3,
    name: "HK Logistices",
    logo: hkLogistices,
    bgColor: "bg-white",
    borderColor: "border-blue-500",
  },
  {
    id: 4,
    name: "Laksham Poribohon",
    logo: laksham,
    bgColor: "bg-gray-900",
    borderColor: "border-gray-700",
  },
  {
    id: 5,
    name: "Opu Enterprise",
    logo: opu,
    bgColor: "bg-green-600",
    borderColor: "border-green-400",
  },

  {
    id: 6,
    name: "Parkline",
    logo: parkline,
    bgColor: "bg-gray-900",
    borderColor: "border-gray-700",
  },
  {
    id: 7,
    name: "Asif International",
    logo: asif,
    bgColor: "bg-gray-900",
    borderColor: "border-gray-700",
  },
   {
    id: 8,
    name: "AJ Enterprise",
    logo: AjEnter,
    bgColor: "bg-gray-900",
    borderColor: "border-gray-700",
  },
  {
    id: 9,
    name: "SLS",
    logo: sls,
    bgColor: "bg-gray-900",
    borderColor: "border-gray-700",
  },
    {
    id: 10,
    name: "Rony Transport",
    logo: noImage,
    bgColor: "bg-gray-900",
    borderColor: "border-gray-700",
  },
]

export default function ClientList() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  return (
    <div className="container px-6 py-16 mx-auto" id="partner">
      {/* Main Heading */}
      <div ref={sectionRef} className="text-center mb-12">
        <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 leading-snug ${isSectionInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }} >
          বাংলাদেশের যেসব প্রতিষ্ঠান তাদের প্রতিষ্ঠান <br />
          পরিচালনার জন্য নিয়মিত ব্যবহার করছে{" "}
          <span className="text-primary">Tramessy</span>
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        // navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1240:{
            slidesPerView: 6,
            spaceBetween: 20,
          }
        }}
        className="pb-10"
      >
        {company.map((institution) => (
          <SwiperSlide key={institution.id}>
            <div className="text-center group cursor-pointer px-4">
              <div className="mb-6 flex justify-center">
                <div
                  className={`w-32 h-32 rounded-full bg-white ${institution.borderColor} border flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                >
                  <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={institution.logo}
                      alt={institution.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary group-hover:text-blue-600 transition-colors duration-200">
                {institution.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
