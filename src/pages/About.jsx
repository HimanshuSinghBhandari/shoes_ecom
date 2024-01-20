import React, { useLayoutEffect } from "react";
import Transition from "../components/Transition";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="h-95vh flex items-center justify-start px-4">
      <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl">
      COLLECTION is an e-commerce initiative designed to demonstrate proficiency in REACT.JS and Framer Motion. The project utilizes assets sourced from the NIKE newsroom to showcase these skills.
      </h1>
    </div>
  );
};

export default Transition(About);
