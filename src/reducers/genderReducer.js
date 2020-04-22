import * as actionTypes from "../types";

const initialState = {
  filter_gender_data: [],
};

/**
 * @function genderReducer
 * @param { Object } state - Initial state of the character reducer
 * @param { String } action - dispatch action type to change state accordingly.
 * @returns { Object } state - return the updated state based on action type
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GENDER_FILTERED_DATA:
      return {
        ...state,
        filter_gender_data: state.filter_gender_data.concat(action.payload),
      };

    case actionTypes.REMOVE_GENDER_FILTERED_DATA:
      const idx = state.filter_gender_data.indexOf(action.payload);
      return {
        ...state,
        filter_gender_data: state.filter_gender_data
          .slice(0, idx)
          .concat(
            state.filter_gender_data.slice(
              idx + 1,
              state.filter_gender_data.length
            )
          ),
      };

    default:
      return state;
  }
};
