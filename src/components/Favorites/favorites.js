import React from "react";
import classes from "./favorites.module.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionKeys/actionCreator";

const favorites = props => {
  if (props.favorites.length === 0) {
    return <h1>NO Favorites Listed</h1>;
  } else {
    return (
      <div>
        <h1>My Favorites</h1>
        <div>
          {props.favorites.map((item, i) => {
            return (
              <div
                className={classes.list}
                key={"favorites-" + i + "-id"}
                data-id={item}
              >
                <img
                  src={item}
                  onClick={() => props.onPreRemoveFromFavorite(item)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveFromFavorite: id => dispatch(actionCreators.removeFavorite(id)),
    onPreRemoveFromFavorite: id => dispatch(actionCreators.preRemove(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(favorites);
