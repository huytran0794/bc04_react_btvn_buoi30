import React, { Component } from "react";
import FeatureList from "./FeatureList";
class SectionFeature extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <FeatureList />
          </div>
        </div>
      </section>
    );
  }
}

export default SectionFeature;
