import characterReducer from "./characterReducer";
import * as actionTypes from "../types";

const initialState = {
  all_characters: [],
  error_text: "",
};

describe("character reducer test suite", () => {
  test("character gender reducer with dummy action", () => {
    const action = { type: "dummy_action" };
    expect(characterReducer(undefined, action)).toEqual(initialState);
  });

  test("check character reducer with get character async data", () => {
    const action = {
      type: actionTypes.GET_CHARACTERS_ASYNC,
      payload: "Test",
    };
    const expectedState = { all_characters: ["Test"], error_text: "" };
    expect(characterReducer(undefined, action)).toEqual(expectedState);
  });

  test("check character reducer with error", () => {
    const action = { type: actionTypes.REQUESTED_DATA_ERROR, payload: "Error" };
    const expectedState = { all_characters: [], error_text: "Error" };
    expect(characterReducer(undefined, action)).toEqual(expectedState);
  });

  test("check character reducer to sort the character state in ascending order", () => {
    const action = { type: actionTypes.SORT_DATA_BY_ASCENDING };
    const previousState = {
      all_characters: [
        {
          id: 4,
        },
        {
          id: 3,
        },
      ],
      error_text: "",
    };
    const expectedState = {
      all_characters: [
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
      error_text: "",
    };
    expect(characterReducer(previousState, action)).toEqual(expectedState);
  });

  test("check character reducer to sort the character state in descending order", () => {
    const action = { type: actionTypes.SORT_DATA_BY_DESCENDING };
    const previousState = {
      all_characters: [
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
      error_text: "",
    };
    const expectedState = {
      all_characters: [
        {
          id: 4,
        },
        {
          id: 3,
        },
      ],
      error_text: "",
    };
    expect(characterReducer(previousState, action)).toEqual(expectedState);
  });
});
