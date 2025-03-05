import React from "react";
import Button from "./components/UI/Button";
import ButtonGradient from "./assets/images/svg/ButtonGradient";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
