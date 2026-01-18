import Banner from "../../components/home/Banner";
import ChooseEdufy from "../../components/home/ChooseEdufy";
import ClientList from "../../components/home/ClientList";
import FAQSection from "../../components/home/FAQ";
import FeaturesSection from "../../components/home/Features";
import Review from "../../components/home/Review";
import { useGetAllBrandQuery } from "../../redux/api/brand/brandApi";


const Home = () => {
    const {data}= useGetAllBrandQuery()
    console.log(data, "from home")
    return (
        <div>
            <Banner/>
            <FeaturesSection/>
            <ChooseEdufy/>
            <ClientList/>
            <FAQSection/>
            <Review/>
        </div>
    );
};

export default Home;