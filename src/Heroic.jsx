import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SectionFeature from "./Components/Section/SectionFeature";
import Footer from "./Components/Footer";
class Heroic extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Header></Header>
        <SectionFeature></SectionFeature>
        <Footer></Footer>
      </>
    );
  }
}

export default Heroic;
