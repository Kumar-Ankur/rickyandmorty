import React from "react";
import { getFilteredData } from "../../../utils";

const CheckBox = (props) => {
  const { data, addFilter, removeFilter } = props;

  /**
   * @function handlecheckBox
   * @param { Object } event - window Object for capturing event when user click on checkbox.
   * @description - call getFilteredData function to dispatch the action to update the state based on checkbox selection.
   */
  const handlecheckBox = (event) => {
    getFilteredData(event, addFilter, removeFilter);
  };

  return (
    <>
      <input
        data-test="component-checkbox"
        type="checkbox"
        id={data}
        name={data}
        value={data}
        onClick={(e) => handlecheckBox(e)}
      />
      <label htmlFor={data}>{data}</label>
      <br />
    </>
  );
};

export default CheckBox;
