import React from "react";
import { connect } from "react-redux";
import { deleteFeature } from "../actions/featuresAction";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.deleteFeature(props.feature.id)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = { deleteFeature };

export default connect(null, mapDispatchToProps)(AddedFeature);
