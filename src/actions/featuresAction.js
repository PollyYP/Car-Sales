export const addFeatures = (feature) => {
  return { type: "ADD_FEATURES", payload: feature };
};

export const deleteFeature = (id) => {
  return { type: "DELETE_FEATURE", payload: id };
};
