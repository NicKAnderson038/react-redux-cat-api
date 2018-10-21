import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

/* Import Reducers */
import favoritesReducer from "./reducers/favorites";
import fetchCatsReducer from "./reducers/fetchCats";

const rootReducer = combineReducers({
  favoriteResult: favoritesReducer,
  fetchCatsResult: fetchCatsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
