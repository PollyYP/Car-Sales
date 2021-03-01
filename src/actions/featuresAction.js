export const addFeatures = (featureName) => {
  return { type: "ADD_FEATURES", payload: featureName };
};

export const deleteFeature = (id) => {
  return { type: "DELETE_FEATURE", payload: id };
};
