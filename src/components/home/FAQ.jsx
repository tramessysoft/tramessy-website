

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useInView } from "../../shared/hooks/UseInView"

const faqData = [
  {
    id: 1,
    question: "Tramessy কী?",
    answer:
      "Tramessy একটি উন্নত ট্রান্সপোর্ট ম্যানেজমেন্ট সিস্টেম (TMS), যা ব্যবসায়ীদের লজিস্টিকস অপারেশন, জ্বালানি খরচ, যানবাহনের কার্যক্ষমতা, এবং রুট পরিকল্পনা ট্র্যাক, ম্যানেজ এবং অপটিমাইজ করতে সাহায্য করে।",
  },
  {
    id: 2,
    question: "কারা Tramessy ব্যবহার করতে পারে?",
    answer:
      "Tramessy বিশেষভাবে ট্রান্সপোর্ট কোম্পানি, লজিস্টিকস প্রদানকারী, ফ্লিট ম্যানেজার, কর্পোরেট ব্যবসা এবং বিতরণকারীদের জন্য ডিজাইন করা হয়েছে যারা ট্রান্সপোর্ট ম্যানেজমেন্টের জন্য একটি কার্যকর ডিজিটাল সমাধান চান।",
  },
  {
    id: 3,
    question: " Tramessy কীভাবে ট্রান্সপোর্ট দক্ষতা উন্নত করে?",
    answer:
      "Tramessy রুট পরিকল্পনা, জ্বালানি ব্যবস্থাপনা, যানবাহন ট্র্যাকিং এবং ট্রিপ শিডিউলিং অপটিমাইজ করে খরচ কমায় এবং ডেলিভারি সময় উন্নত করে।",
  },
  {
    id: 4,
    question: "Tramessy কী কী ফিচার অফার করে?",
    answer:
      "লাইভ GPS ট্র্যাকিং – রিয়েল টাইমে যানবাহন মনিটর করুন। জ্বালানি খরচ ব্যবস্থাপনা – জ্বালানির ব্যবহার ট্র্যাক করুন এবং অপব্যবহার প্রতিরোধ করুন। AI-পাওয়ারড রুট অপটিমাইজেশন – ডেলিভারি সময় এবং জ্বালানি খরচ কমান। ড্রাইভার কার্যক্ষমতা মনিটরিং – ট্রিপের কার্যক্ষমতা বিশ্লেষণ করুন। অটোমেটেড ট্রিপ শিডিউলিং – লজিস্টিকস পরিকল্পনা উন্নত করুন। স্মার্ট খরচ এবং রাজস্ব রিপোর্ট – বিস্তারিত খরচ বিশ্লেষণ।"
  },
  {
    id: 5,
    question: "Tramessy কি অন্য সফটওয়্যারের সাথে ইন্টিগ্রেট করতে পারে?",
    answer: "হ্যাঁ! Tramessy ERP, অ্যাকাউন্টিং সফটওয়্যার, ফুয়েল কার্ড সিস্টেম এবং GPS ট্র্যাকিং ডিভাইসের সাথে ইন্টিগ্রেট করতে সক্ষম।",
  },
  {
    id: 6,
    question: " Tramessy কি মোবাইল অ্যাপ হিসেবে ব্যবহার করা যাবে?",
    answer: "হ্যাঁ, Tramessy একটি মোবাইল-ফ্রেন্ডলি ইন্টারফেস এবং রিয়েল টাইম অ্যাক্সেসের জন্য একটি অ্যাপ এর মতো কাজ করে।",
  },
  {
    id: 7,
    question: "সফটওয়্যার ব্যবহার সংক্রান্ত প্রশিক্ষণ প্রদান করা হবে?",
    answer: "হ্যাঁ, আমরা বিনামূল্যে প্রশিক্ষণ প্রদান করি। আমাদের বিশেষজ্ঞ টিম আপনাকে সফটওয়্যার ব্যবহারের সম্পূর্ণ প্রশিক্ষণ দেবে।",
  },
  {
    id: 8,
    question: "যদি আমার সফটওয়্যারটি কাজ না করে বা আমি সন্তুষ্ট না হই, তাহলে কি টাকা ফেরত পাব?",
    answer: "আমাদের রয়েছে ৩০ দিনের মানি-ব্যাক গ্যারান্টি। যদি আপনি সন্তুষ্ট না হন, তাহলে আমরা আপনার টাকা ফেরত দেব।",
  },
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(null)
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })

  const toggleItem = (id) => {
    setOpenItem(prev => (prev === id ? null : id))
  }

  const leftColumnItems = faqData.slice(0, 4)
  const rightColumnItems = faqData.slice(4, 8)

  return (
    <div className="">
      <div ref={sectionRef} className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-12 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">প্রায়শই জিজ্ঞাসিত প্রশ্ন গুলো -</h2>
          <p className="text-gray-600 text-md leading-relaxed max-w-3xl mx-auto">
            আমাদের গ্রাহকদের জন্য প্রয়োজনীয় দিকগুলোর সম্পর্কে ধারণা যা আমাদের সেবা সম্পর্কে
            <br />
            জানতে সহায়তা করবে, গ্রাহক সেবার সহায়ী আমাদের কাছেন।
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnItems.map((item, index) => (
              <div key={item.id} className={`bg-white p-4 rounded-md shadow-sm ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? `${0.4 + index * 0.1}s` : "0s" }}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-start justify-between text-left group"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    {/* <span className="text-md font-semibold text-gray-400 mt-1">
                      {item.id.toString().padStart(2, "0")}
                    </span> */}
                    <h3 className="text-md font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-200 flex-1">
                      {item.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {openItem === item.id ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>

                {openItem === item.id && (
                  <div className="mt-4 ml-12 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnItems.map((item, index) => (
              <div key={item.id} className={`bg-white p-4 rounded-md shadow-sm ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? `${0.4 + index * 0.1}s` : "0s" }}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-start justify-between text-left group"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    {/* <span className="text-md font-semibold text-gray-400 mt-1">
                      {item.id.toString().padStart(2, "0")}
                    </span> */}
                    <h3 className="text-md font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-200 flex-1">
                      {item.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {openItem === item.id ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>

                {openItem === item.id && (
                  <div className="mt-4 ml-12 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
