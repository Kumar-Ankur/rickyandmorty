import genderReducer from "./genderReducer";
import * as actionTypes from "../types";

const initialState = {
  filter_gender_data: [],
};

describe("gender reducer test suite", () => {
  test("check gender reducer with dummy action", () => {
    const action = { type: "dummy_action" };
    expect(genderReducer(undefined, action)).toEqual(initialState);
  });

  test("check gender reducer with add new filtered data", () => {
    const action = {
      type: actionTypes.ADD_GENDER_FILTERED_DATA,
      payload: "Male",
    };
    const expectedState = { filter_gender_data: ["Male"] };
    expect(genderReducer(undefined, action)).toEqual(expectedState);
  });

  test("check gender reducer with remove item", () => {
    const action = {
      type: actionTypes.REMOVE_GENDER_FILTERED_DATA,
      payload: "Male",
    };
    const expectedState = { filter_gender_data: [] };
    expect(genderReducer(undefined, action)).toEqual(expectedState);
  });
});
