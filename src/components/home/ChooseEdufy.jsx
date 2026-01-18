// import { Cloud, Settings, Building2, FileText } from "lucide-react"

// export default function ChooseEdufy() {
//   return (
//     <div className="container mx-auto px-6 py-12 bg-white">
//       {/* Main Heading */}
//       <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
//         কেন ট্র্যামেসি কে বেছে নিবেন?
//       </h1>

//       {/* Description Paragraph */}
//       <p className="text-gray-600 text-base leading-relaxed mb-12 max-w-4xl">
//        Tramessy একটি আধুনিক ক্লাউড-ভিত্তিক ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার, যা বাস, ট্রাক, ভাড়া গাড়ি, কুরিয়ার বা SME পরিবহন ব্যবসা সহজে ও কার্যকরভাবে পরিচালনায় সহায়তা করে। এটি এমনভাবে ডিজাইন করা হয়েছে, যাতে আপনি যেকোনো সময়, যেকোনো জায়গা থেকে আপনার মোবাইল বা কম্পিউটার ব্যবহার করে ব্যবসা পর্যবেক্ষণ ও নিয়ন্ত্রণ করতে পারেন। ব্যবহারবান্ধব ইন্টারফেস এবং স্বয়ংক্রিয় রিপোর্টিং ফিচারের কারণে প্রযুক্তি সম্পর্কে কম জ্ঞান থাকলেও যে কেউ সহজেই এটি ব্যবহার করতে পারেন।
//       </p>

//       {/* Feature Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Card 1 - Cloud Service */}
//         <div className="text-center">
//           <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
//             <div className="relative">
//               <Cloud className="w-10 h-10 text-blue-600" />
//               <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-sm flex items-center justify-center">
//                 <div className="w-2 h-2 bg-white rounded-sm"></div>
//               </div>
//             </div>
//           </div>
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">ক্লাউড বেইজড সফটওয়্যার</h3>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             Edufy- ক্লাউড বেইজড সফটওয়্যার হওয়ায় যেমন এটি যে কোন জায়গা থেকে একসেস করা যায় তেমনি প্রতিষ্ঠানের কোন ডাটা হারিয়ে যাবার কোন ভয়
//             নেই যদি কোন কারনে কম্পিউটারের প্রতিষ্ঠানে ক্ষতি হয় বা ক্ষতিগ্রস্ত হয় তবেও...
//           </p>
//           <a href="#" className="text-teal-500 text-sm font-medium hover:text-teal-600">
//             আরো পড়ুন
//           </a>
//         </div>

//         {/* Card 2 - Financial */}
//         <div className="text-center">
//           <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
//             <div className="relative">
//               <Settings className="w-10 h-10 text-green-600" />
//               <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
//                 <span className="text-white text-xs font-bold">৳</span>
//               </div>
//             </div>
//           </div>
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">সাশ্রয়ী</h3>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             Edufy- মাসিক সাবস্ক্রিপশন এর ভিত্তিতে সার্ভিস প্রদান করে যেটি যে কোন শিক্ষা প্রতিষ্ঠানের জন্য আর্থিক ভাবে সাশ্রয়ী সুবিধা হবে
//             না।এবং এটি কোন ইনস্টলেশন ফি নেই এবং সহজেই পরিশোধযোগ্য হয় যাকে। বা সহজেই বন্ধ...
//           </p>
//           <a href="#" className="text-teal-500 text-sm font-medium hover:text-teal-600">
//             আরো পড়ুন
//           </a>
//         </div>

//         {/* Card 3 - Business Management */}
//         <div className="text-center">
//           <div className="w-20 h-20 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
//             <div className="relative">
//               <Building2 className="w-10 h-10 text-teal-600" />
//               <div className="absolute -top-2 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
//               <div className="absolute -top-1 right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
//               <div className="absolute top-1 -right-2 w-3 h-3 bg-red-400 rounded-full"></div>
//             </div>
//           </div>
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">সহজে ব্যবহারযোগ্য</h3>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             Edufy এমন একটি ব্যবহারকারী-বান্ধব সফটওয়্যার যা ব্যবহার করা ও পরিচালনা সহজ এবং কোন উন্নতযোগ্য প্রশিক্ষণ ছাড়াই এটি কার্যকরী ভাবে
//             ব্যবহার করতে পারবে।
//           </p>
//           <a href="#" className="text-teal-500 text-sm font-medium hover:text-teal-600">
//             আরো পড়ুন
//           </a>
//         </div>

//         {/* Card 4 - Data Analytics */}
//         <div className="text-center">
//           <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
//             <div className="relative">
//               <FileText className="w-10 h-10 text-orange-600" />
//               <div className="absolute -top-1 -right-2 w-6 h-4 bg-yellow-400 rounded-sm flex items-center justify-center">
//                 <div className="w-3 h-2 bg-orange-500 rounded-sm"></div>
//               </div>
//             </div>
//           </div>
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">তথ্য স্থানান্তর</h3>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             Edufy-তে তথ্য স্থানান্তর এর সুবিধা রয়েছে যেকোন যে কোন সিস্টেম থেকে প্রাথমিক ডেটাবেস বিশ্লেষণ করে স্থানান্তর করে দেওয়া হয়।
//             এডুফাই এর সাথে তথ্য আদান প্রদান যে কেউ এডুফাই গ্রহণ তার প্রয়োজনীয় ডাটা নিতেজন...
//           </p>
//           <a href="#" className="text-teal-500 text-sm font-medium hover:text-teal-600">
//             আরো পড়ুন
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

import { Cloud, Settings, Building2, FileText, PlayCircle, ShieldCheck, RefreshCcw, Headset } from "lucide-react"
import { useInView } from "../../shared/hooks/UseInView"


export default function ChooseEdufy() {
     const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
    const features = [
  {
    icon: Cloud,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    title: "ক্লাউড বেইজড সফটওয়্যার",
    description:
      "Tramessy একটি ক্লাউড-ভিত্তিক সফটওয়্যার হওয়ায় এটি যেকোনো জায়গা থেকে নিরাপদে ব্যবহারযোগ্য। কম্পিউটার বা মোবাইল হার্ডওয়্যার নষ্ট হলেও আপনার ডেটা নিরাপদ থাকবে এবং যেকোনো সময় পুনরুদ্ধার করা যাবে।",
    badge: <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-sm flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-sm"></div>
    </div>,
  },
  {
    icon: Settings,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    title: "সাশ্রয়ী",
    description:
      "Tramessy একটি সাশ্রয়ী সাবস্ক্রিপশন মডেলে সেবা প্রদান করে, যা ছোট থেকে বড় যেকোনো ট্রান্সপোর্ট প্রতিষ্ঠানের জন্য সহজলভ্য ও অর্থনৈতিকভাবে সুবিধাজনক।",
    badge: <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
      <span className="text-white text-xs font-bold">৳</span>
    </div>,
  },
  {
    icon: Building2,
    iconColor: "text-teal-600",
    bgColor: "bg-teal-100",
    title: "সহজে ব্যবহারযোগ্য",
    description:
      "Tramessy এমনভাবে তৈরি, যাতে প্রশিক্ষণ ছাড়াও নতুন ব্যবহারকারী সফটওয়্যারটি দ্রুত বুঝে এবং চালাতে পারেন। প্রতিটি মডিউল সরল এবং কার্যকরভাবে সাজানো।",
    badge: (
      <>
        <div className="absolute -top-2 -right-1 w-4 h-4 bg-yellow-400 rounded-full" />
        <div className="absolute -top-1 right-1 w-2 h-2 bg-orange-400 rounded-full" />
        <div className="absolute top-1 -right-2 w-3 h-3 bg-red-400 rounded-full" />
      </>
    ),
  },
  {
    icon: FileText,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "তথ্য স্থানান্তর",
    description:
      "আপনার বর্তমান ট্রান্সপোর্ট ডেটা যেমন চালান, কাস্টমার, ইনকাম-এক্সপেন্স, বুকিং হিস্টোরি ইত্যাদি অন্য সফটওয়্যার বা এক্সেল থেকে Tramessy-তে সহজেই স্থানান্তর করা যায়।",
    badge: (
      <div className="absolute -top-1 -right-2 w-6 h-4 bg-yellow-400 rounded-sm flex items-center justify-center">
        <div className="w-3 h-2 bg-orange-500 rounded-sm"></div>
      </div>
    ),
  },
   {
    icon: Headset,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-100",
    title: "ক্লায়েন্ট সাপোর্ট",
    description: "Tramessy-এর রয়েছে ২৪/৭ ডেডিকেটেড সাপোর্ট টিম। আপনি যেকোনো সমস্যায় পড়লে আমাদের টিম আপনাকে ফোন, হোয়াটসঅ্যাপ বা ভিডিও কলে দ্রুত সহায়তা প্রদান করে।",
    badge: null
  },
  {
    icon: RefreshCcw,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-100",
    title: "লাইফটাইম আপডেট",
    description: "আমাদের টেকনিক্যাল টিম নিয়মিতভাবে নতুন ফিচার ও নিরাপত্তা আপডেট দিয়ে Tramessy-কে ভবিষ্যতের প্রযুক্তির সাথে তাল মিলিয়ে তৈরি রাখে — যা আপনি অতিরিক্ত কোনো খরচ ছাড়াই পাবেন।",
    badge: null
  },
  {
    icon: ShieldCheck,
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
    title: "তথ্য নিরাপত্তা",
    description: "Tramessy আপনার ডেটা নিরাপত্তা নিশ্চিত করতে আধুনিক এনক্রিপশন এবং ব্যাকআপ সিস্টেম ব্যবহার করে। আপনার প্রতিষ্ঠানের তথ্য থাকবে শতভাগ সুরক্ষিত।",
    badge: null
  },
  {
    icon: PlayCircle,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    title: "ট্রেনিং ও ভিডিও টিউটোরিয়াল",
    description: "নতুন ব্যবহারকারীদের জন্য রয়েছে ফ্রি ট্রেনিং, গাইডলাইন, এবং ভিডিও টিউটোরিয়াল – যেন আপনি বা আপনার টিম সহজেই সফটওয়্যারটি ব্যবহার শুরু করতে পারেন।",
    badge: null
  }
]
  return (
    <div ref={sectionRef} className="container mx-auto px-6 py-12 bg-white">
      <h1 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left ${isSectionInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>
        কেন ট্র্যামেসি কে বেছে নিবেন?
      </h1>
      <p className={`text-gray-600 text-base leading-relaxed mb-12 max-w-4xl ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>
        Tramessy একটি আধুনিক ক্লাউড-ভিত্তিক ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার, যা বাস, ট্রাক, ভাড়া গাড়ি, কুরিয়ার বা SME পরিবহন ব্যবসা সহজে ও কার্যকরভাবে পরিচালনায় সহায়তা করে। এটি এমনভাবে ডিজাইন করা হয়েছে, যাতে আপনি যেকোনো সময়, যেকোনো জায়গা থেকে আপনার মোবাইল বা কম্পিউটার ব্যবহার করে ব্যবসা পর্যবেক্ষণ ও নিয়ন্ত্রণ করতে পারেন। ব্যবহারবান্ধব ইন্টারফেস এবং স্বয়ংক্রিয় রিপোর্টিং ফিচারের কারণে প্রযুক্তি সম্পর্কে কম জ্ঞান থাকলেও যে কেউ সহজেই এটি ব্যবহার করতে পারেন।
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className={`text-center ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? `${0.4 + index * 0.1}s` : "0s" }}>
              <div className={`w-20 h-20 mx-auto mb-4 ${item.bgColor} rounded-full flex items-center justify-center`}>
                <div className="relative">
                  <Icon className={`w-10 h-10 ${item.iconColor}`} />
                  {item.badge}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
              {/* <a href="#" className="text-teal-500 text-sm font-medium hover:text-teal-600">
                আরো পড়ুন
              </a> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
