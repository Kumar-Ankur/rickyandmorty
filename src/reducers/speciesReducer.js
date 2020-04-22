import * as actionTypes from "../types";

const initialState = {
  filter_data: [],
};

/**
 * @function speciesReducer
 * @param { Object } state - Initial state of the character reducer
 * @param { String } action - dispatch action type to change state accordingly.
 * @returns { Object } state - return the updated state based on action type
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILTERED_DATA:
      return {
        ...state,
        filter_data: state.filter_data.concat(action.data),
      };

    case actionTypes.ADD_FILTERED_DATA:
      return {
        ...state,
        filter_data: state.filter_data.concat(action.payload),
      };

    case actionTypes.REMOVE_FILTERED_DATA:
      const index = state.filter_data.indexOf(action.payload);
      return {
        ...state,
        filter_data: state.filter_data
          .slice(0, index)
          .concat(state.filter_data.slice(index + 1, state.filter_data.length)),
      };

    default:
      return state;
  }
};
