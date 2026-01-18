import { Button } from "antd";
import { Check } from "lucide-react";
import { useInView } from "../../shared/hooks/UseInView";
import { Link } from "react-router-dom";

const PricingCard = ({ 
  title, 
  subtitle, 
  price, 
  period, 
  features, 
  isPopular = false, 
  buttonText, 
  gradient,
  icon ,
  isSectionInView,
  badge
}) => {
  return (
    <div className="relative">
      {badge && (
        // <span className="absolute top-4 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded">
        //   {badge}
        // </span>
        <span className="absolute top-6 -right-2 z-10 rounded-l bg-green-500 text-white text-xs font-bold px-3 py-1 shadow-md">
 {badge}
  <span className="absolute right-0 top-full border-t-8 border-l-8 border-l-green-500 border-t-transparent rotate-90"></span>
</span>

      )}
      <div className={`relative overflow-hidden rounded-lg border bg-white text-gray-900 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
      isPopular 
        ? 'border-2 border-primary shadow-xl' 
        : 'border border-gray-200 hover:border-primary/60'
    } ${isSectionInView ? "animate-fade-up" : "opacity-0"}`}>
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-teal-600 text-white text-center py-2 text-sm font-semibold">
          সবচেয়ে জনপ্রিয়
        </div>
      )}
      
      <div className={`h-2 ${gradient}`} />
      
      <div className={`text-center ${isPopular ? 'pt-8' : 'pt-6'} flex flex-col space-y-1.5 p-6`}>
        
        <div className="flex justify-center mb-4">
          <div className={`p-3 rounded-full bg-gradient-to-r ${gradient} text-white`}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
        )}
        
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{price}৳</span>
          <span className="text-gray-600 ml-1">/ {period}</span>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                feature.included ? 'text-green-500' : 'text-gray-300'
              }`} />
              <span className={`text-sm ${
                feature.included ? 'text-gray-700' : 'text-gray-400'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <Link to="/contact-us">
        <Button 
          className={`w-full py-3 font-semibold transition-all duration-300 ${
            isPopular
              ? 'bg-gradient-to-r from-primary to-teal-600 hover:!from-blue-600 hover:!to-primary text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:!border-primary hover:!text-primary'
          }`}
        >
          {buttonText}
        </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default PricingCard;