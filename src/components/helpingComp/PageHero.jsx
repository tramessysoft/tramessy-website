"use client"
import { Link } from "react-router-dom" // Assuming react-router-dom for navigation

const PageHero = ({ title, breadcrumbs = [] }) => {
  return (
    <section
      className="w-full py-20 md:py-28 flex flex-col items-center justify-center text-white text-center
                 bg-gradient-to-r from-primary via-primary/80 to-teal-500 "
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-6 pt-8">{title}</h1>
      <nav aria-label="breadcrumb" className="flex justify-center">
        <ol className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-white opacity-70">{">"}</span>}
              {item.href ? (
                <Link
                  to={item.href}
                  className={`text-white ${
                    index === breadcrumbs.length - 1 ? "font-semibold opacity-100" : "opacity-70 hover:underline"
                  } transition-opacity duration-200`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium text-sm opacity-100">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </section>
  )
}

export default PageHero
