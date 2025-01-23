import CollectiveDelivery from "../../components/Home/collectivedelivery";
import Features from "../../components/Home/features";
import Framework from "../../components/Home/Framwork";
import FeaturesGrid from "../../components/Home/Grid";
import JoinUs from "../../components/Home/Joinus";
import ProcessMap from "../../components/Home/ProcessMap";
import UpliftDelivery from "../../components/Home/upliftdelivery";



const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Features/>
      <FeaturesGrid/>
      <UpliftDelivery/>
      <CollectiveDelivery/>
      <Framework/>
      <ProcessMap/>
      <JoinUs/>
    </div>
  )
}

export default Home;