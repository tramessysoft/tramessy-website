
// import { useState } from "react"
// import { Send, Mail, Phone, MapPin } from "lucide-react"

// export default function FooterSection() {
//   const [email, setEmail] = useState("")

//   const handleEmailSubmit = (e) => {
//     e.preventDefault()
//     console.log("Email submitted:", email)
//     setEmail("")
//   }

//   return (
//     <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600 text-white">
//       {/* Background overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-teal-600/90"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Company Info Column */}
//           <div className="lg:col-span-1">
//             {/* Logo */}
//             <div className="flex items-center mb-6">
//               <div className="w-10 h-10 mr-3">
//                 <svg viewBox="0 0 40 40" className="w-full h-full">
//                   <rect x="2" y="2" width="36" height="36" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
//                   <rect x="8" y="8" width="8" height="8" fill="currentColor" />
//                   <rect x="20" y="8" width="8" height="8" fill="currentColor" />
//                   <rect x="8" y="20" width="8" height="8" fill="currentColor" />
//                   <rect x="20" y="20" width="8" height="8" fill="currentColor" />
//                 </svg>
//               </div>
//               <span className="text-2xl font-bold">Edufy</span>
//             </div>

//             {/* Company Description */}
//             <div className="space-y-4 text-sm leading-relaxed opacity-90">
//               <p>
//                 Edufy, এমন একটি সফটওয়্যার যা প্রতিটি শিক্ষা প্রতিষ্ঠানকে তাদের শিক্ষক, শিক্ষার্থী এবং প্রতিষ্ঠান পরিচালনা করতে সাহায্য করে।
//               </p>
//               <p>
//                 সর্বোচ্চ শিক্ষার্থী ও শুল্কগুলোর চাহিদা পূরণ করার জন্য আমাদের কাছে বিভিন্ন পণ্য এবং পরিষেবা রয়েছে। ভবিষ্যৎ কার্যক্রম থাকে তুলে
//                 করে শিক্ষার্থীদের উপকারিতে দেয়া, ট্যাক্স মুক্ত, কাজ পরিচালনা করা, বাজার কাজ, পরীক্ষা পরিচালনা সহ আরোতিরিক্ত কার্যক্রম পরিচালনার সকল
//                 দিক, শিক্ষক ও কর্মচারীদের পরিচালনা এবং রিপোর্ট তৈরি সহ আরও অনেক কিছু হয়ে যায়।
//               </p>
//               <p>
//                 শিক্ষা প্রতিষ্ঠানগুলিকে তাদের কর্মকাণ্ড ডিজিটাইজ এবং আরও কার্যকরভাবে চালানো প্রতিষ্ঠানিত সাহায্য করতে, Edufy সাহায্য গুলো ও
//                 নিরন্তরতায় শিক্ষা ব্যবস্থাপনার একটি সহজ সমাধান।
//               </p>
//               <p className="pt-4 border-t border-white/20">আমাদের হট লাইনের নম্বর হল: ০৫-৫৯১৭৫</p>
//             </div>
//           </div>

//           {/* Quick Links Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">কুইক লিংক</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   Edufy সম্পর্কে
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   হোমপেজ
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   রেট / ফেস স্ট্যাটাস
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Institution Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">প্রতিষ্ঠান</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   কোম্পানী সম্পর্কে
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   শপ
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   সেবা
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   যোগাযোগ করুন
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   পার্টনার
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors duration-200"
//                 >
//                   Refund Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">আমাদের সাথে যোগাযোগ করুন</h3>

//             {/* Contact Information */}
//             <div className="space-y-4 mb-8">
//               <div className="flex items-start space-x-3">
//                 <Mail className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
//                 <div>
//                   <p className="text-sm font-medium">info@edufy.cloud</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <Phone className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
//                 <div className="text-sm space-y-1">
//                   <p>+880 1894-430505</p>
//                   <p>+880 1894-430504</p>
//                   <p>+880 1730-797262</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
//                 <div className="text-sm">
//                   <p>বাজারা লা মাইকেট দে অহমেন, ছুটার #রিং,</p>
//                   <p>ব্লক #৭১, রোড #২৭, জনপদ-০১,</p>
//                   <p>ঢাকা-১২১২</p>
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter Signup */}
//             <div>
//               <p className="text-sm mb-4 opacity-90">
//                 আমাদের বিশেষ অফার সুবিধাগুলো এবংতাই বুঝে নিন। আপনার শিক্ষা পরিচালনার পাশে আছি আমরা
//               </p>

//               <form onSubmit={handleEmailSubmit} className="flex">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter email address"
//                   className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-r-lg transition-colors duration-200 flex items-center justify-center"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


import { useState } from "react"
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import carBg from "../../assets/image/carBg.jpeg"
import whiteLogo from "../../assets/logo-2.svg"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import bms from "../../assets/logo/BMS Tech o.png"
import basis from "../../assets/logo/basis.webp"

const quickLinks = [
  { name: "Tramessy সম্পর্কে", path: "/about-us" },
  { name: "হোম", path: "/" },
  { name: "প্যাকেজ এবং প্রাইস", path: "/package-pricing" },
];

const institutionLinks = [
  { name: "কোম্পানী সম্পর্কে", type:"page", path: "/about-us" },
  { name: "সেবা", type:"section", path: "/about-us#service" },
  { name: "যোগাযোগ করুন", type:"page", path: "/contact-us" },
  { name: "পার্টনার", type:"section", path: "/#partner" },
  { name: "Privacy Policy", type:"page", path: "/privacy-policy" },
  { name: "Terms of Service", type:"page", path: "/terms-of-service" },
  { name: "Refund Policy", type:"page", path: "/refund-policy" },
];

export default function FooterSection() {
  const [email, setEmail] = useState("")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom right,  #11375b, rgba(70,150,136,0.85)), url(${carBg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">

          {/* Company Info */}
          <div>
            <img src={whiteLogo} alt="" className="w-28" />
       

            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              Tramessy সফটওয়্যারটি ট্রানসপোর্ট ব্যবসার এর আধুনিকায়নের কথা মাথায় রেখে এমন ভাবে ডিজাইন করা হয়েছে যেনো যেকোন ট্রানসপোর্ট ব্যবসায়ী তাদের দৈনন্দিন কার্যক্রম সহজেই এবং কম সময়ে পরিচালনা করতে পারেন 
              <p className="pt-4 border-t border-white/20">হটলাইন: 09666700722</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-5">
                <div>
                  <h1 className="text-sm ">A Product Of:</h1>
              <img src={bms} alt="Basis" className="w-28 rounded" />
                </div>
                <div>
                  <h1 className="text-sm ">Member Of:</h1>
                  <img src={basis} alt="" className="w-28 rounded" />
                </div>
              </div>
              <div className="text-sm">
                <p>Trade License No. TRAD/DNCC/009194/2022</p>
                <p>TIN No. 341194158241</p>
                <p>VAT Reg. No. 0050990580101</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">কুইক লিংক</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-sm opacity-90 hover:text-teal-500 transition-colors duration-200" onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">প্রতিষ্ঠান</h3>
            <ul className="space-y-3">
              {institutionLinks.map((link, index) => (
                <li key={index}>
                 { link.type === "section" ? (
                   <HashLink smooth to={link.path} className="text-sm opacity-90 hover:text-teal-500 transition-colors duration-200" onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }>
                    {link.name}
                  </HashLink>
                 )
                 :( <Link to={link.path} className="text-sm opacity-90 hover:text-teal-500 transition-colors duration-200" onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }>
                    {link.name}
                  </Link>)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">যোগাযোগ করুন</h3>

            <div className="space-y-4 mb-8 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-500" />
                <p>info@tramessy.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-500" />
                <div>
                  <p>09666-700722</p>
                  {/* <p>+880 1730-797262</p> */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-teal-500" />
                <div>
                  <p>+880 1627-355382</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500" />
                <div>
                  <p>হাউস-১৮, রোড-৩, নিকুঞ্জ-২, খিলক্ষেত, ঢাকা, বাংলাদেশ</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            {/* <p className="text-sm mb-4">বিশেষ অফার ও আপডেট পেতে আমাদের সঙ্গে থাকুন।</p>
            <form onSubmit={handleEmailSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                disabled
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-r-lg transition-colors duration-200 disabled:cursor-not-allowed"
                disabled
              >
                <Send className="w-5 h-5" />
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
