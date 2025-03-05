import React from "react";
import Button from "./components/UI/Button";
import ButtonGradient from "./assets/images/svg/ButtonGradient";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Home />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
