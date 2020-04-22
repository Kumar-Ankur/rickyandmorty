import React, { Component } from "react";
import CheckBox from "../../presentation/CheckBox/CheckBox";
import { connect } from "react-redux";
import * as actionCreator from "../../../actions";
import * as constants from "../../../constants";
import { getCheckBoxData } from '../../../utils';
import './OriginView.scss';

class OriginView extends Component {

  render() {
    const { all_characters } = this.props;
    const originData = getCheckBoxData(all_characters, constants.ORIGIN, true);
    const { addOriginFilteredData, removeOriginFilteredData } = this.props;
    const getOriginBox = originData.map((data, index) => {
      return (
        <div key={index}>
          <CheckBox
            data={data}
            addFilter={addOriginFilteredData}
            removeFilter={removeOriginFilteredData}
          />
        </div>
      );
    });

    return (
      <div className="species-content">
          <h2>{ constants.ORIGIN_FILTER }</h2>
        <form>{getOriginBox}</form>
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
    addOriginFilteredData: (data) => dispatch(actionCreator.addOriginFilteredData(data)),
    removeOriginFilteredData: (data) =>
      dispatch(actionCreator.removeOriginFilteredData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OriginView);
