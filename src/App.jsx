import React from "react";
import ButtonGradient from "./assets/images/svg/ButtonGradient";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Home />
      </main>
      <ButtonGradient />
    </>
  );
};

export default App;
