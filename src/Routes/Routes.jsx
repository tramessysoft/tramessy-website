import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../NotFound/NotFound";
import Features from "../Pages/Features/Features";
import PackagePricing from "../Pages/PackagePricing/PackagePricing";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import RefundsPolicy from "../Pages/RefundPolicy/RefundPolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../Pages/TermsOfService/TermsOfService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/package-pricing",
        element: <PackagePricing />,
      },
      {
        path: "/about-us",
        element: <About/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/refund-policy",
        element: <RefundsPolicy/>
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService/>
      }
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <DashboardHome />,
  //     },
  //   ],
  // },
]);

export default router;
