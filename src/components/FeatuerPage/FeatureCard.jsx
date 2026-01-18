import * as LucideIcons from "lucide-react" // Import all icons from lucide-react

const FeatureCard = ({ iconName, title, description, linkText = "আরো পড়ুন", linkHref = "#", animationDelay = "0s", isSectionInView }) => {
  const IconComponent = LucideIcons[iconName] || LucideIcons.HelpCircle // Fallback icon

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 hover:bg-sky-50 flex flex-col items-start text-left ${isSectionInView ? "animate-fade-up" : ""}`}  style={{ animationDelay: animationDelay }}>
      <div className="mb-4">{IconComponent && <IconComponent className="w-10 h-10 text-feature-icon text-primary" />}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      {/* <a href={linkHref} className="text-feature-link font-medium hover:underline text-sm text-primary">
        {linkText}
      </a> */}
    </div>
  )
}

export default FeatureCard
