

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import clientImage1 from "../../assets/image/MH.png"
import clientImage2 from "../../assets/image/mohammed_jayed_hassan.jpg"
import clientImageMostakFahad from "../../assets/image/rent-e-car.jpeg"
import clientSahajan from "../../assets/image/sahjan-image.png"
import clientAbid from "../../assets/image/abid.png"
import clientOvi from "../../assets/image/Afjal-image.jpg"
import { useInView } from "../../shared/hooks/UseInView"
import { useTranslation } from "react-i18next"

export default function Review() {
  const { t } = useTranslation()
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  const testimonials = [
  {
    id: 1,
    name: "Nawshad Ahmed",
    designation: "MHR Freight, Chittagong",
    image: clientImage1 , 
    testimonial:
      t("testimonials.list.review1")
  },
  {
    id: 2,
    name: "Mohammed Jayed Hassan",
    designation: "Proprietor, H K Logistics",
    image: clientImage2,
    testimonial:
      t("testimonials.list.review2")
  },
 {
    id: 3,
    name: "Nawshad Ahmed",
    designation: "MHR Freight, Chittagong",
    image: clientImage1 , 
    testimonial:
      t("testimonials.list.review3")
  },
  {
    id: 4,
    name: "Mohammed Jayed Hassan",
    designation: "Proprietor, H K Logistics",
    image: clientImage2,
    testimonial:
      t("testimonials.list.review4")
  },
  {
    id: 5,
    name: "MOSTAK FAHAD",
    designation: "Proprietor, Nalitabari Rent-a-Car",
    image: clientImageMostakFahad,
    testimonial:
      t("testimonials.list.review5")
  },
   {
    id: 6,
    name: "মোঃ শাহ জাহান",
    designation: "ভাই ভাই এন্ট্রাপ্রাইজ, চট্টগ্রাম।",
    image: clientSahajan,
    testimonial:
      t("testimonials.list.review6")
  },
    {
    id: 7,
    name: "মোঃ আবিদ হাসান",
    designation: "এম এস এম ট্রেডার্স, শেরপুর।",
    image: clientAbid,
    testimonial:
      t("testimonials.list.review7")
  },
  {
    id: 8,
    name: "ইঞ্জিনিয়ার অভি আহমেদ",
    designation: "আফজাল ট্রান্সপোর্ট, মিরপুর, ঢাকা।",
    image: clientOvi,
    testimonial:
      t("testimonials.list.review8")
  },
]
  return (
    <div ref={sectionRef} className="container mx-auto px-6 py-16" id="review">
      <div className="text-center mb-16">
        <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-6 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>{t("testimonials.title")}</h2>
        <p className={`text-gray-600 text-md leading-relaxed max-w-3xl mx-auto ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>
          {t("testimonials.description")}
          <br />
          {t("testimonials.description_2ndpart")}
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="h-[20rem]"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-lg p-8 shadow-lg relative">
              <div className="absolute top-6 left-6 text-6xl text-gray-200 font-serif leading-none">
                “
              </div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={testimonial?.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                  <p className="text-gray-600 font-medium mb-1">{testimonial.designation}</p>
                  <p className="text-sm text-gray-500">"{testimonial.institution}"</p>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-gray-700 leading-relaxed text-base line-clamp-4">{testimonial.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}