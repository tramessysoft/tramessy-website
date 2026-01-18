

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
const testimonials = [
  {
    id: 1,
    name: "Nawshad Ahmed",
    designation: "MHR Freight, Chittagong",
    image: clientImage1 , 
    testimonial:
      "আমরা আগে আলাদা আলাদা খাতায়, প্রতিদিনের ইনকাম, খরচ, ড্রাইভারদের ভ্রমণের কাস্টমার ডিউটি আলাদা আলাদা লিখে রাখতাম। ট্রামেসি সফটওয়্যার ব্যবহার করার পর সব তথ্য এক সফটওয়্যারেই পাচ্ছি। সবচেয়ে ভালো লাগে, অটোমেটিক রিপোর্ট তৈরি হয় ক্লিকেই কিন্তু ডাউনলোডও করা যায়। এগুলো “আমাদের দেশের ট্রান্সপোর্ট ব্যবসা যেমন চলে” তার জন্য যেমন ম্যানেজমেন্ট, ডিউটি অ্যাসাইনমেন্ট, চালান, বিল তৈরি—সবকিছুই ফিচারেই আছে।"
  },
  {
    id: 2,
    name: "Mohammed Jayed Hassan",
    designation: "Proprietor, H K Logistics",
    image: clientImage2,
    testimonial:
      "ট্রামেসি সফটওয়্যার ব্যবহারের পর থেকে আমাদের পরিবহন পরিচালনায় অনেক গতি এসেছে। গাড়ির বুকিং, ইনকাম-এক্সপেন্স রিপোর্ট—সবকিছু এক ক্লিকে পাচ্ছি। ব্যবহার সহজ, টিমের সাপোর্টও চমৎকার। যারা প্রকল্পভিত্তিক তাদের পরিবহন ব্যবসা ম্যানেজ করতে চান, তাদের জন্য ট্রামেসি একটি অসাধারণ সমাধান।"
  },
 {
    id: 3,
    name: "Nawshad Ahmed",
    designation: "MHR Freight, Chittagong",
    image: clientImage1 , 
    testimonial:
      "আমরা আগে আলাদা আলাদা খাতায়, প্রতিদিনের ইনকাম, খরচ, ড্রাইভারদের ভ্রমণের কাস্টমার ডিউটি আলাদা আলাদা লিখে রাখতাম। ট্রামেসি সফটওয়্যার ব্যবহার করার পর সব তথ্য এক সফটওয়্যারেই পাচ্ছি। সবচেয়ে ভালো লাগে, অটোমেটিক রিপোর্ট তৈরি হয় ক্লিকেই কিন্তু ডাউনলোডও করা যায়। এগুলো “আমাদের দেশের ট্রান্সপোর্ট ব্যবসা যেমন চলে” তার জন্য যেমন ম্যানেজমেন্ট, ডিউটি অ্যাসাইনমেন্ট, চালান, বিল তৈরি—সবকিছুই ফিচারেই আছে।"
  },
  {
    id: 4,
    name: "Mohammed Jayed Hassan",
    designation: "Proprietor, H K Logistics",
    image: clientImage2,
    testimonial:
      "ট্রামেসি সফটওয়্যার ব্যবহারের পর থেকে আমাদের পরিবহন পরিচালনায় অনেক গতি এসেছে। গাড়ির বুকিং, ইনকাম-এক্সপেন্স রিপোর্ট—সবকিছু এক ক্লিকে পাচ্ছি। ব্যবহার সহজ, টিমের সাপোর্টও চমৎকার। যারা প্রকল্পভিত্তিক তাদের পরিবহন ব্যবসা ম্যানেজ করতে চান, তাদের জন্য ট্রামেসি একটি অসাধারণ সমাধান।"
  },
  {
    id: 5,
    name: "MOSTAK FAHAD",
    designation: "Proprietor, Nalitabari Rent-a-Car",
    image: clientImageMostakFahad,
    testimonial:
      "আমি রেন্ট-এ-কার ব্যবসা করি। আগে হিসাব রাখতে অনেক কষ্ট হতো -কোন গাড়ি কোথায়, কত ইনকাম, কত খরচ সব মনে রাখা কঠিন ছিল। এখন ট্রামেসি ব্যবহার করছি। সব কিছু এক জায়গায় পাই। বুকিং, ড্রাইভার, ইনকাম-খরচ, সব হিসাব এখন মোবাইলে দেখি। অনেক সুবিধা হচ্ছে ধন্যবাদ ট্রামেসি টিমকে!",
  },
   {
    id: 6,
    name: "মোঃ শাহ জাহান",
    designation: "ভাই ভাই এন্ট্রাপ্রাইজ, চট্টগ্রাম।",
    image: clientSahajan,
    testimonial:
      "ট্রামেসি ব্যবহার করার পর থেকে আমার কাজের ধরনই বদলে গেছে। আগে যেখানে হিসাব ও রিপোর্ট তৈরি করতে অনেক সময় লাগত, এখন সবকিছু কয়েক ক্লিকেই হয়ে যায়। এক কথায়, ব্যবসা পরিচালনায় ট্রামেসি আমার সবচেয়ে বড় সহায়ক!",
  },
    {
    id: 7,
    name: "মোঃ আবিদ হাসান",
    designation: "এম এস এম ট্রেডার্স, শেরপুর।",
    image: clientAbid,
    testimonial:
      "ট্রামেসি ব্যবহার করে আমি সত্যিই মুগ্ধ। এর সহজ ইন্টারফেস আর স্মার্ট ফিচারগুলো আমার পুরো টিমের কাজের গতি অনেক বাড়িয়ে দিয়েছে। এখন ব্যবসার প্রতিটি দিক নিয়ন্ত্রণ করা অনেক সহজ ও সময়সাশ্রয়ী!",
  },
  {
    id: 8,
    name: "ইঞ্জিনিয়ার অভি আহমেদ",
    designation: "আফজাল ট্রান্সপোর্ট, মিরপুর, ঢাকা।",
    image: clientOvi,
    testimonial:
      "ট্রামেসি সত্যিই অসাধারণ সফটওয়্যার। এখানে সবকিছু এত সহজ ও স্মার্টভাবে সাজানো যে আমার ব্যবসা পরিচালনা অনেক বেশি দ্রুত ও ঝামেলাহীন হয়েছে!",
  },
]

export default function Review() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  return (
    <div ref={sectionRef} className="container mx-auto px-6 py-16" id="review">
      <div className="text-center mb-16">
        <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-6 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>গ্রাহকদের অভিজ্ঞতা</h2>
        <p className={`text-gray-600 text-md leading-relaxed max-w-3xl mx-auto ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>
          আমাদের গুরুত্বপূর্ণ গ্রাহক যারা তাদের অভিজ্ঞতা শেয়ার করেছেন। আপনাদের সময় এর সাথে
          <br />
          এগিয়ে যেতে পাশে থেকে সাহায্য করাই আমাদের অগ্রাধিকার।
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
                "
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