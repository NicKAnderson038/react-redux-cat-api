import * as actionTypes from "../actionKeys/actionTypes";
import { updateObject } from "../util/utility";

const initialState = {
  listOfFavorites: [],
  preAdd: [],
  preRemove: []
};

const addFavorite = (state, action) => {
  const cleanState = [...state.listOfFavorites];
  const preAdd = state.preAdd[0];
  !cleanState.includes(preAdd) ? cleanState.push(preAdd) : null;
  const updateState = {
    listOfFavorites: cleanState,
    preRemove: [],
    preAdd: []
  };
  return updateObject(state, updateState);
};

const removeFavorite = (state, action) => {
  const cleanState = [...state.listOfFavorites];
  const preRemove = state.preRemove[0];
  const newList = cleanState.filter(url => url != preRemove);
  const updateState = {
    listOfFavorites: newList,
    preRemove: [],
    preAdd: []
  };
  return updateObject(state, updateState);
};

const preAdd = (state, action) => {
  const updateState = {
    preAdd: [action.preAddResult]
  };
  return updateObject(state, updateState);
};

const preRemove = (state, action) => {
  const updateState = {
    preRemove: [action.preRemoveResult]
  };
  return updateObject(state, updateState);
};

const cleanPreFavorite = (state, action) => {
  const updateState = {
    preRemove: [],
    preAdd: []
  };
  return updateObject(state, updateState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE:
      return addFavorite(state, action);
    case actionTypes.REMOVE_FAVORITE:
      return removeFavorite(state, action);
    case actionTypes.PRE_ADD_FAVORITE:
      return preAdd(state, action);
    case actionTypes.PRE_REMOVE_FAVORITE:
      return preRemove(state, action);
    case actionTypes.CLEAN_PRE_FAVORITE:
      return cleanPreFavorite(state, action);
    default:
      return state;
  }
};

export default reducer;
