import React from "react";
import { connect } from "react-redux";

import { addFeatures } from "../actions/featuresAction";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeatures(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = { addFeatures };

export default connect(null, mapDispatchToProps)(AdditionalFeature);
//export default AdditionalFeature;
