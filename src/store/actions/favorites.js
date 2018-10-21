import * as actionTypes from "../actionKeys/actionTypes";

export const addFavorite = val => {
  return {
    type: actionTypes.ADD_FAVORITE
  };
};

export const removeFavorite = val => {
  return {
    type: actionTypes.REMOVE_FAVORITE
  };
};

export const preAdd = val => {
  return {
    type: actionTypes.PRE_ADD_FAVORITE,
    preAddResult: val
  };
};

export const preRemove = val => {
  return {
    type: actionTypes.PRE_REMOVE_FAVORITE,
    preRemoveResult: val
  };
};

export const cleanPreFavorite = () => {
  return {
    type: actionTypes.CLEAN_PRE_FAVORITE
  };
};
