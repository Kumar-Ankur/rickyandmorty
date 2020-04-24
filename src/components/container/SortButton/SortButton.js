import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../../actions";
import * as constants from "../../../constants";
import "./sortButton.scss";

class SortButton extends Component {
  render() {
    return (
      <>
        <button
          data-test="component-btn-asc"
          onClick={() => this.props.sortAscendingById()} // dispatch an action to sort data based on id in ascending order
          type="submit"
          className="btn btn--animated btn--white"
          style={{ marginRight: "1rem" }}
        >
          {constants.SORT_ASCENDING_TEXT}
        </button>
        <button
          data-test="component-btn-desc"
          onClick={() => this.props.sortDescendingById()} // dispatch an action to sort data based on id in descending order
          type="submit"
          className="btn btn--animated btn--white"
        >
          {constants.SORT_DESCENDING_TEXT}
        </button>
      </>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    sortAscendingById: () => dispatch(actionCreator.sortAscendingById()),
    sortDescendingById: () => dispatch(actionCreator.sortDescendingById()),
  };
};

export default connect(null, mapDispatchToProps)(SortButton);
