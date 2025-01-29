import CollectiveDelivery from "../../components/Home/collectivedelivery";
import Features from "../../components/Home/features";
import  Project from "../../components/Home/Framwork";
import FeaturesGrid from "../../components/Home/Grid";
import JoinUs from "../../components/Home/Joinus";
import Contact from "../../components/Home/Contact";
import UpliftDelivery from "../../components/Home/upliftdelivery";



const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Features/>
      <FeaturesGrid/>
      <UpliftDelivery/>
      <CollectiveDelivery/>
      < Project/>
      <Contact/>
      <JoinUs/>
    </div>
  )
}

export default Home;