import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import WhatsAppButton from "../../components/helpingComp/WhatsappButton";
const Main = () => {
  return (
    <main>
      <Navbar/>
      <Outlet></Outlet>
       {/* whatsapp button */}
      <WhatsAppButton/>
      <Footer/>
    </main>
  );
};

export default Main;
