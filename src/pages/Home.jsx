import Footer from "../components/shared/Footer";
import Benefits from "./homeComp/benefits/Benefits";
import Collaboration from "./homeComp/collaboration/Collaboration";
import Hero from "./homeComp/hero/Hero";
import Pricing from "./homeComp/pricing/Pricing";
import Roadmap from "./homeComp/roadmap/Roadmap";
import Services from "./homeComp/services/Service";

import {useEffect} from "react";
import Lenis from "lenis";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function update(time) {
      lenis.raf(time);
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
    return () => cancelAnimationFrame(update);
  }, []);
  return (
    <>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </>
  );
};

export default Home;
