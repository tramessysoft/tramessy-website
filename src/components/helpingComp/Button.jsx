const Button = ({
  children,
  Icon,
  variant = "default", // 'default', 'gradient', 'category'
  size = "default", // 'default', 'sm', 'lg'
  className = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 ease-in-out"

  const variantStyles = {
    default: "bg-button-primary-bg text-white hover:bg-opacity-90 shadow-lg",
    gradient: "bg-button-gradient text-white hover:opacity-90 shadow-lg",
    category: "bg-button-category-bg text-white hover:bg-opacity-90 shadow-lg",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
    link: "text-blue-600 hover:underline",
  }

  const sizeStyles = {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
    icon: "p-2", // For icon-only buttons
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {Icon && <Icon className={`${size === "lg" ? "w-6 h-6" : "w-5 h-5"}`} />}
      {children}
    </button>
  )
}

export default Button
