import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../../actions";
import * as constants from "../../../constants";
import "./SearchView.scss";

class SearchView extends Component {

/**
 * @function handleChange
 * @param { Object } event - window event object when user type any word in text box
 * @description - Dispatch action to reducer to update the search text state.
 */
  handleChange = (event) => {
    const { addSearchText } = this.props;
    // dispatch the event to update the search text state.
    addSearchText(event.target.value);
  };
  render() {
    return (
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          onChange={(e) => this.handleChange(e)}
          required
        />
        <label htmlFor="name" className="form__label">
          { constants.NAME }
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSearchText: (data) => dispatch(actionCreator.addSearchText(data)),
  };
};

export default connect(null, mapDispatchToProps)(SearchView);
