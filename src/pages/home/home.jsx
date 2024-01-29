import React, { useState } from "react";
import "../../App.css";
import HomeSectionOne from "../../components/HomeSectionOne";
import HomeSectionThree from "../../components/HomeSectionThree";
import HomeSectionFive from "../../components/HomeSectionFive";
import HomeSectionSeven from "../../components/HomeSectionSeven";
import HomeSectionNine from "../../components/HomeSectionNine";
import HomeSectionTwo from "../../components/HomeSectionTwo";
import HomeSectionFour from "../../components/HomeSectionFour"
import HomeSectionSix from "../../components/HomeSectionSix"
import HomeSectionEight from "../../components/HomeSectionEight" 
import HomeSectionTen from "../../components/HomeSectionTen"
function App() {
  return (
    <div className="App">
      <HomeSectionOne />
      {/* <HomeSectionTwo /> */}
      <HomeSectionThree />
      <HomeSectionFour />
      {/* <HomeSectionFive /> */}
      {/* <HomeSectionSix /> */}
      <HomeSectionSeven />
      <HomeSectionEight />
      <HomeSectionNine />
      <HomeSectionTen />
    </div>
  );
}

export default App;
