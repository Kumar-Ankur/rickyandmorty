import * as actionTypes from "../types";

const initialState = {
  filter_origin_data: [],
};


/**
 * @function originReducer
 * @param { Object } state - Initial state of the character reducer
 * @param { String } action - dispatch action type to change state accordingly.
 * @returns { Object } state - return the updated state based on action type
 */

export default  (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORIGIN_FILTERED_DATA:
      return {
        ...state,
        filter_origin_data: state.filter_origin_data.concat(action.payload),
      };

    case actionTypes.REMOVE_ORIGIN_FILTERED_DATA:
      const OriginIdx = state.filter_origin_data.indexOf(action.payload);
      return {
        ...state,
        filter_origin_data: state.filter_origin_data
          .slice(0, OriginIdx)
          .concat(
            state.filter_origin_data.slice(
              OriginIdx + 1,
              state.filter_origin_data.length
            )
          ),
      };

    default:
      return state;
  }
};
