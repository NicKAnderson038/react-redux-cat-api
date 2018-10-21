import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionKeys/actionCreator";
import Favorites from "../components/Favorites/favorites";
import Backdrop from "../components/UI/backdrop";

class FavoritePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Backdrop />
        <Favorites favorites={this.props.favoriteList} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    favoriteList: state.favoriteResult.listOfFavorites
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritePage);
