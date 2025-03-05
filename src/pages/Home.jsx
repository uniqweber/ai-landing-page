import Footer from "../components/shared/Footer";
import Benefits from "./homeComp/benefits/Benefits";
import Collaboration from "./homeComp/collaoration/Collaboration";
import Hero from "./homeComp/hero/Hero";
import Pricing from "./homeComp/pricing/Pricing";
import Roadmap from "./homeComp/roadmap/Roadmap";
import Services from "./homeComp/services/Service";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer/>
    </>
  );
};

export default Home;
