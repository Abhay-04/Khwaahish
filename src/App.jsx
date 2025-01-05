import React from "react";
import SectionOne from "./component/SectionOne";
import OurLogo from "./component/OurLogo";
import OurValues from "./component/OurValues";
import OurPromoters from "./component/OurPromoters";

const App = () => {
  return (
    <div className=" main">
      <SectionOne />
      <OurLogo />
      <OurValues />
      <OurPromoters />
    </div>
  );
};

export default App;
