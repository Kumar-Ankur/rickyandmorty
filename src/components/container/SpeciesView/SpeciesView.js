import React, { Component } from "react";
import CheckBox from "../../presentation/CheckBox/CheckBox";
import { connect } from "react-redux";
import * as actionCreator from "../../../actions";
import * as constants from "../../../constants";
import { getCheckBoxData } from '../../../utils';
import './SpeciesView.scss';

class SpeciesView extends Component {

  render() {
    const { all_characters } = this.props;
    const speciesData = getCheckBoxData(all_characters, constants.SPECIES);
    const { addFilteredData, removeFilteredData } = this.props;

    const getSpeciesBox = speciesData.map((data, index) => {
      return (
        <div key={index}>
          <CheckBox
            data={data}
            addFilter={addFilteredData}
            removeFilter={removeFilteredData}
          />
        </div>
      );
    });

    return (
      <div className="species-content">
          <h2>{ constants.SPECIES_FILTER }</h2>
        <form>{getSpeciesBox}</form>
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
    addFilteredData: (data) => dispatch(actionCreator.addFilteredData(data)),
    removeFilteredData: (data) =>
      dispatch(actionCreator.removeFilteredData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesView);
