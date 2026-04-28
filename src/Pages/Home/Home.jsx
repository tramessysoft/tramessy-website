import Banner from "../../components/home/Banner";
import ChooseEdufy from "../../components/home/ChooseEdufy";
import ClientList from "../../components/home/ClientList";
import FAQSection from "../../components/home/FAQ";
import FeaturesSection from "../../components/home/Features";
import Review from "../../components/home/Review";
import { useGetAllBrandQuery } from "../../redux/api/brand/brandApi";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const { data } = useGetAllBrandQuery();
  console.log(data, "from home");
  return (
    <>
      <Helmet>
        <title>Transport Management Software in Bangladesh | Tramessy</title>

        <meta
          name="description"
          content="Tramessy is a powerful transport management software in Bangladesh. Easily manage trips, vehicles, drivers, billing, and reports in one system."
        />

        <meta
          name="keywords"
          content="transport management software, fleet management system Bangladesh, logistics software BD, truck management system"
        />
      </Helmet>
      <div>
        <Banner />
        <FeaturesSection />
        <ChooseEdufy />
        <ClientList />
        <FAQSection />
        <Review />
      </div>
    </>
  );
};

export default Home;
