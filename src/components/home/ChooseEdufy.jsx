
import { Cloud, Settings, Building2, FileText, PlayCircle, ShieldCheck, RefreshCcw, Headset } from "lucide-react"
import { useInView } from "../../shared/hooks/UseInView"
import { useTranslation } from "react-i18next"


export default function ChooseEdufy() {
  const { t } = useTranslation()
     const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
    const features = [
  {
    icon: Cloud,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    title: t("benefits.cloud"),
    description:
      t("benefits.Cloud_title"),
    badge: <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-sm flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-sm"></div>
    </div>,
  },
  {
    icon: Settings,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    title: t("benefits.affordable"),
    description:
     t("benefits.affordable_title"),
    badge: <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
      <span className="text-white text-xs font-bold">৳</span>
    </div>,
  },
  {
    icon: Building2,
    iconColor: "text-teal-600",
    bgColor: "bg-teal-100",
    title: t("benefits.easy"),
    description:
      t("benefits.easy_title"),
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
    title: t("benefits.migration"),
    description:
      t("benefits.migration_title"),
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
    title: t("benefits.support"),
    description: t("benefits.support_title"),
    badge: null
  },
  {
    icon: RefreshCcw,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-100",
    title: t("benefits.updates"),
    description: t("benefits.updates_title"),
    badge: null
  },
  {
    icon: ShieldCheck,
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
    title: t("benefits.security"),
    description: t("benefits.security_title"),
    badge: null
  },
  {
    icon: PlayCircle,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    title: t("benefits.training"),
    description: t("benefits.training_title"),
    badge: null
  }
]
  return (
    <div ref={sectionRef} className="container mx-auto px-6 py-12 bg-white">
      <h1 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left ${isSectionInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>
        {t("why_choose.title")}
      </h1>
      <p className={`text-gray-600 text-base leading-relaxed mb-12 max-w-4xl ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}>
        {t("why_choose.description")}
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
