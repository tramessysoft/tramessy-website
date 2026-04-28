

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useInView } from "../../shared/hooks/UseInView"
import { useTranslation } from "react-i18next"



export default function FAQSection() {
  const { t } = useTranslation()
  const [openItem, setOpenItem] = useState(null)
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
const faqData = [
  {
    id: 1,
    question: t("faq.questions.0.question"),
    answer: t("faq.questions.0.answer")
  },
  {
    id: 2,
    question: t("faq.questions.1.question"),
    answer: t("faq.questions.1.answer")
  },
  {
    id: 3,
    question: t("faq.questions.2.question"),
    answer: t("faq.questions.2.answer")
  },
  {
    id: 4,
    question: t("faq.questions.3.question"),
    answer: t("faq.questions.3.answer")
  },
  {
    id: 5,
    question: t("faq.questions.4.question"),
    answer: t("faq.questions.4.answer")
  },
  {
    id: 6,
    question: t("faq.questions.5.question"),
    answer: t("faq.questions.5.answer")
  },
  {
    id: 7,
    question: t("faq.questions.6.question"),
    answer: t("faq.questions.6.answer")
  },
  {
    id: 8,
    question: t("faq.questions.7.question"),
    answer: t("faq.questions.7.answer")
  }
]
  const toggleItem = (id) => {
    setOpenItem(prev => (prev === id ? null : id))
  }
// const faqData = t("faq.questions", { returnObjects: true })
  const leftColumnItems = faqData.slice(0, 4)
  const rightColumnItems = faqData.slice(4, 8)

  return (
    <div className="">
      <div ref={sectionRef} className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-12 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{t("faq.title")}</h2>
          <p className="text-gray-600 text-md leading-relaxed max-w-3xl mx-auto">
           {t("faq.subtitle")}
            <br />
            {t("faq.subtitle_2ndpart")}
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
