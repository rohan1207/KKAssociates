import React from "react";

import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import ClientFeedback from "../components/ClientFeedback";
import Expertise from "../components/Expertise";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurServices />

      <Expertise />
      <ClientFeedback />
    </>
  );
};

export default HomePage;
