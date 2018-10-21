import React from "react";
import classes from "./cats.module.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionKeys/actionCreator";
const cats = props => {
  if (!props.network) {
    return (
      <div>
        <h1 className={classes.network}>Check Network Connection</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>CAT PICTURES!</h1>
        <h4>Select your favorite cats</h4>
        <div>
          {props.catImages.map(item => {
            return (
              <div className={classes.list} key={item.id} data-id={item.id}>
                <img
                  src={item.url}
                  onClick={() => props.onPreAddToFavorite(item.url)}
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
    onPreAddToFavorite: id => dispatch(actionCreators.preAdd(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cats);
