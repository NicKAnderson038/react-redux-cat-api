import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionKeys/actionCreator";
import Cats from "../components/Cats/cats";
import Backdrop from "../components/UI/backdrop";

class CatPage extends Component {
  componentDidMount() {
    this.props.onFetchCats();
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop />
        <Cats
          network={this.props.networkActive}
          catImages={this.props.listOfCatImages}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    networkActive: state.fetchCatsResult.networkActive,
    listOfCatImages: state.fetchCatsResult.listOfCatImages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCats: () => dispatch(actionCreators.fetchCats())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatPage);
