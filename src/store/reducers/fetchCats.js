import * as actionTypes from "../actionKeys/actionTypes";
import { updateObject } from "../util/utility";

const initialState = {
  listOfCats: [],
  networkActive: true,
  listOfCatImages: []
};

const fetchedCats = (state, action) => {
  for (const props of action.fetchedCatsResult) {
    props.id = `https://api.thecatapi.com/v1/images/${props.id}`;
  }
  const updateState = {
    listOfCats: action.fetchedCatsResult
  };
  return updateObject(state, updateState);
};

const networkCheck = (state, action) => {
  // console.log("NETWORK: ", state, action);

  const updateState = {
    networkActive: action.networkResult
  };
  return updateObject(state, updateState);
};

const getImageLinks = (state, action) => {
  const updateState = {
    listOfCatImages: action.fetchCatImagesResult
  };
  return updateObject(state, updateState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATS:
      return fetchedCats(state, action);
    case actionTypes.NETWORK_CHECK:
      return networkCheck(state, action);
    case actionTypes.FETCH_CAT_IMAGES:
      return getImageLinks(state, action);
    default:
      return state;
  }
};

export default reducer;
