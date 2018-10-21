import reducer from "./favorites.js";
import * as actionTypes from "../actionKeys/actionTypes";

describe("favorites reducer", () => {
  it("State should format to the initalState on application load", () => {
    expect(reducer(undefined, {})).toEqual({
      listOfFavorites: [],
      preAdd: [],
      preRemove: []
    });
  });

  it(`should add a url string to the preAdd: 
  preAdd holds a specific cat image prior to 
  adding it the listOfFavorites upon a user 
  selection 'SAVE'.`, () => {
    expect(
      reducer(
        {
          listOfFavorites: [],
          preAdd: [],
          preRemove: []
        },
        {
          type: actionTypes.PRE_ADD_FAVORITE,
          preAddResult: "https://TestURL.com"
        }
      )
    ).toEqual({
      listOfFavorites: [],
      preAdd: ["https://TestURL.com"],
      preRemove: []
    });
  });

  it(`should add a url string to the preRemove: 
  preRemove holds a specific cat image selected 
  prior to adding it the listOfFavorites upon a 
  user selection 'REMOVE'.`, () => {
    expect(
      reducer(
        {
          listOfFavorites: [],
          preAdd: [],
          preRemove: []
        },
        {
          type: actionTypes.PRE_REMOVE_FAVORITE,
          preRemoveResult: "https://TestURL.com"
        }
      )
    ).toEqual({
      listOfFavorites: [],
      preAdd: [],
      preRemove: ["https://TestURL.com"]
    });
  });
});
