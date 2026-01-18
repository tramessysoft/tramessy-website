// import { ArrowDown } from 'lucide-react';
// import React from 'react';

// const Banner = () => {
//     return (
//         <div className="min-h-screen bg-white">
//             {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
//         {/* Gradient Background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-teal-500"></div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-white space-y-8 animate-fade-in-up">
//               <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
//                 শিক্ষা প্রতিষ্ঠান ব্যবস্থাপনার একটি নির্ভরযোগ্য সফটওয়্যার
//               </h1>

//               <p className="text-md lg:text-lg text-white/90 leading-relaxed">
//                 এডুফাই একটি শিক্ষা প্রতিষ্ঠান ব্যবস্থাপনা সফটওয়্যার যার মাধ্যমে শিক্ষা প্রতিষ্ঠানের সকল বিষয়ান সহজভাবে কাজ গুলোকে ডিজিটাল এবং সহজে
//                 পরিচালনা করা যায় ,পাশাপাশি শিক্ষা প্রতিষ্ঠান কে একটি আধুনিক এবং...
//               </p>

//               <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 group">
//                 <span>ডেমো রিকুয়েস্ট করুন</span>
//                 <svg
//                   className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </button>
//             </div>

//             {/* Right Content - Laptop Mockup */}
//             <div className="relative animate-fade-in-right">
//               <div className="relative transform hover:scale-105 transition-transform duration-700">
//                 {/* Laptop Frame */}
//                 <div className="bg-gray-800 rounded-t-3xl p-6 shadow-2xl">
//                   <div className="bg-white rounded-xl overflow-hidden shadow-inner">
//                     {/* Browser Bar */}
//                     <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
//                       <div className="flex space-x-2">
//                         <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                         <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                         <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                       </div>
//                       <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500">
//                         https://tramessy.com.bd
//                       </div>
//                     </div>

//                     {/* Dashboard Content */}
//                     <div className="h-80 lg:h-96 bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
//                       {/* Top Stats */}
//                       <div className="grid grid-cols-4 gap-4 mb-6">
//                         <div className="bg-white rounded-lg p-3 shadow-sm">
//                           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
//                             <div className="w-4 h-4 bg-blue-500 rounded"></div>
//                           </div>
//                           <div className="text-xs text-gray-600">Students</div>
//                           <div className="text-lg font-bold text-gray-800">1,234</div>
//                         </div>
//                         <div className="bg-white rounded-lg p-3 shadow-sm">
//                           <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2">
//                             <div className="w-4 h-4 bg-green-500 rounded"></div>
//                           </div>
//                           <div className="text-xs text-gray-600">Teachers</div>
//                           <div className="text-lg font-bold text-gray-800">89</div>
//                         </div>
//                         <div className="bg-white rounded-lg p-3 shadow-sm">
//                           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
//                             <div className="w-4 h-4 bg-purple-500 rounded"></div>
//                           </div>
//                           <div className="text-xs text-gray-600">Classes</div>
//                           <div className="text-lg font-bold text-gray-800">45</div>
//                         </div>
//                         <div className="bg-white rounded-lg p-3 shadow-sm">
//                           <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
//                             <div className="w-4 h-4 bg-orange-500 rounded"></div>
//                           </div>
//                           <div className="text-xs text-gray-600">Revenue</div>
//                           <div className="text-lg font-bold text-gray-800">$12K</div>
//                         </div>
//                       </div>

//                       {/* Charts Section */}
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="bg-white rounded-lg p-4 shadow-sm">
//                           <div className="text-sm font-semibold text-gray-700 mb-3">Attendance Overview</div>
//                           <div className="space-y-2">
//                             <div className="flex items-center justify-between">
//                               <div className="w-full bg-gray-200 rounded-full h-2">
//                                 <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
//                               </div>
//                             </div>
//                             <div className="flex items-center justify-between">
//                               <div className="w-full bg-gray-200 rounded-full h-2">
//                                 <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
//                               </div>
//                             </div>
//                             <div className="flex items-center justify-between">
//                               <div className="w-full bg-gray-200 rounded-full h-2">
//                                 <div className="bg-purple-500 h-2 rounded-full w-2/3"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="bg-white rounded-lg p-4 shadow-sm">
//                           <div className="text-sm font-semibold text-gray-700 mb-3">Performance</div>
//                           <div className="flex items-center justify-center">
//                             <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
//                               <span className="text-white font-bold text-sm">85%</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-700 h-6 rounded-b-3xl"></div>
//               </div>

//               {/* Mobile/Tablet Mockup */}
//               <div className="absolute -bottom-8 -left-8 transform rotate-12 animate-float">
//                 <div className="bg-white rounded-2xl shadow-xl p-4 w-48">
//                   <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl p-4">
//                     <div className="space-y-3">
//                       <div className="flex items-center space-x-2">
//                         <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
//                         <div className="flex-1">
//                           <div className="h-2 bg-gray-300 rounded w-3/4 mb-1"></div>
//                           <div className="h-2 bg-gray-200 rounded w-1/2"></div>
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-3 gap-2">
//                         <div className="h-8 bg-blue-200 rounded"></div>
//                         <div className="h-8 bg-green-200 rounded"></div>
//                         <div className="h-8 bg-purple-200 rounded"></div>
//                       </div>
//                       <div className="space-y-2">
//                         <div className="h-2 bg-gray-200 rounded"></div>
//                         <div className="h-2 bg-gray-200 rounded w-4/5"></div>
//                         <div className="h-2 bg-gray-200 rounded w-3/5"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors">
//             <ArrowDown className="w-5 h-5 text-white" />
//           </div>
//         </div>
//       </section>

//       {/* WhatsApp Float Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <div className="relative">
//           {/* Pulsing Ring Animation */}
//           <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
//           <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>

//           {/* Main Button */}
//           <button className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce-slow">
//             <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
//             </svg>
//           </button>
//         </div>
//       </div>
//         </div>
//     );
// };

// export default Banner;



import { ArrowDown } from "lucide-react"
import dekstopImage from "../../assets/image/truck-seba-dash-dekstop.png"
import smallImage from "../../assets/image/mobile.png"
import { useEffect, useRef, useState } from "react";
import { useInView } from "../../shared/hooks/UseInView";
import { Link } from "react-router-dom";

export default function Banner() {
  const imageRef = useRef(null);
   const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })

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
    title: "ট্রান্সপোর্ট ম্যানেজমেন্ট এর জন্য একটি নির্ভরযোগ্য সফটওয়্যার",
    description: `ট্র্যামেসি একটি আধুনিক সফটওয়্যার, যা ট্রাক, বাস, রেন্ট-এ-কার, করপোরেট ফ্লিটসহ যেকোনো বাণিজ্যিক পরিবহন ব্যবসার বুকিং, হিসাব, ড্রাইভার পারফরম্যান্স, মেইনটেনেন্স ও বকেয়া আদায় ডিজিটালি পরিচালনায় সহায়তা করে। এটি সময় ও খরচ বাঁচিয়ে ব্যবসাকে লাভজনক করে তোলে। `,
    ctaText: "ডেমো রিকুয়েস্ট করুন",
    mainImage: dekstopImage,
    smallImage: smallImage
  }

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }
// grid lg:grid-cols-2 gap-12 lg:gap-20
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-teal-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center">
          {/* Left Content */}
          <div ref={sectionRef} className="text-white space-y-8 animate-fade-in-up md:w-[50%]">
            <h1 className={`text-2xl lg:text-4xl font-bold leading-tight ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>{heroContent.title}</h1>

            <p className={` text-sm lg:text-md text-white/90 leading-relaxed ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>{heroContent.description}</p>

            <Link to="/contact-us" className="mt-6 block"><button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-lg text-sm text-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 group">
              <span>{heroContent.ctaText}</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button></Link>
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
                <div  ref={imageRef} className={`p-4 w-36 lg:w-48 transform  animate-bounce-slow`}>
                  <img src={heroContent.smallImage || "placeholder.svg"} alt="mobile response"/>
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
  )
}
