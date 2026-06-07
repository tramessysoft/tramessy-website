import { useTranslation } from "react-i18next";
import AboutTramessySection from "../../components/About/AboutTramessySection";
import MissionSection from "../../components/About/Mission";
import ServicesSection from "../../components/About/Service";
import TechnologySection from "../../components/About/Technology";
import VisionSection from "../../components/About/Vission";
import PageHero from "../../components/helpingComp/PageHero";
import { Helmet } from "react-helmet-async";

const About = () => {
    const { t } = useTranslation();
    const breadcrumbs = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about") }, 
  ]
    return (
        <>
         <Helmet>
        <title>About Us | Tramessy - Transport Management Software</title>
        <meta
          name="description"
          content="Learn about Tramessy — our mission, vision, and the technology behind Bangladesh's leading transport management software for fleets and logistics."
        />
        <meta
          name="keywords"
          content="about Tramessy, transport software company Bangladesh, fleet management team, logistics technology BD"
        />
      </Helmet>
       <div>
            <PageHero title={t("nav.about")} breadcrumbs={breadcrumbs}/>
            <AboutTramessySection/>
            <MissionSection/>
            <VisionSection/>
            <ServicesSection/>
            <TechnologySection/>
        </div>
        </>
       
    );
};

export default About;





