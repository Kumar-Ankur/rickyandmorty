import React, { Component } from "react";
import { connect } from "react-redux";
import CheckBox from "../../presentation/CheckBox/CheckBox";
import * as actionCreator from "../../../actions";
import * as constants from "../../../constants";
import { getCheckBoxData } from "../../../utils";
import "./GenderView.scss";

class GenderView extends Component {
  render() {
    const { all_characters } = this.props;
    const genderData = getCheckBoxData(all_characters, constants.GENDER);
    const { addGenderFilteredData, removeGenderFilteredData } = this.props;

    const getGenderBox = genderData.map((data, index) => {
      return (
        <div key={index} data-test='container-checkbox'>
          <CheckBox
            data={data}
            addFilter={addGenderFilteredData}
            removeFilter={removeGenderFilteredData}
          />
        </div>
      );
    });

    return (
      <div className="species-content" data-test='component-gender'>
        <h2>{ constants.GENDER_FILTER}</h2>
        <form data-test='component-gender-form'>{getGenderBox}</form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    all_characters: state.character.all_characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGenderFilteredData: (data) =>
      dispatch(actionCreator.addGenderFilteredData(data)),
    removeGenderFilteredData: (data) =>
      dispatch(actionCreator.removeGenderFilteredData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenderView);
