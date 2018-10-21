import React from "react";
import classes from "./backdrop.module.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionKeys/actionCreator";

const backdrop = props => {
  if (props.preAdd.length > 0) {
    return (
      <div className={classes.backdrop}>
        <h1>Add To Favorites?</h1>
        <img src={props.preAdd[0]} />
        <div>
          <button
            className={classes.close}
            onClick={() => props.onCleanPreFavorite()}
          >
            Close
          </button>
          <button
            className={classes.save}
            onClick={() => props.onAddToFavorite()}
          >
            Save
          </button>
        </div>
      </div>
    );
  } else if (props.preRemove.length > 0) {
    return (
      <div className={classes.backdrop}>
        <h1>Remove From Favorites?</h1>
        <img src={props.preRemove[0]} />
        <div>
          <button
            className={classes.close}
            onClick={() => props.onCleanPreFavorite()}
          >
            Close
          </button>
          <button
            className={classes.remove}
            onClick={() => props.onRemoveFromFavorite()}
          >
            Remove
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    preAdd: state.favoriteResult.preAdd,
    preRemove: state.favoriteResult.preRemove
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToFavorite: () => dispatch(actionCreators.addFavorite()),
    onRemoveFromFavorite: () => dispatch(actionCreators.removeFavorite()),
    onCleanPreFavorite: () => dispatch(actionCreators.cleanPreFavorite())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(backdrop);
