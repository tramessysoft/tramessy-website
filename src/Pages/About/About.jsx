import AboutTramessySection from "../../components/About/AboutTramessySection";
import MissionSection from "../../components/About/Mission";
import ServicesSection from "../../components/About/Service";
import TechnologySection from "../../components/About/Technology";
import VisionSection from "../../components/About/Vission";
import PageHero from "../../components/helpingComp/PageHero";

const About = () => {
    const breadcrumbs = [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে" }, 
  ]
    return (
        <div>
            <PageHero title={"আমাদের সম্পর্কে"} breadcrumbs={breadcrumbs}/>
            <AboutTramessySection/>
            <MissionSection/>
            <VisionSection/>
            <ServicesSection/>
            <TechnologySection/>
        </div>
    );
};

export default About;





