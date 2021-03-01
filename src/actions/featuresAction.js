export const addFeatures = (feature) => {
  return { type: "ADD_FEATURES", payload: feature };
};

export const deleteFeature = (feature) => {
  return { type: "DELETE_FEATURE", payload: feature };
};
