import * as actionTypes from "../types";

const initialState = {
  all_characters: [],
};

/**
 * @function characterReducer
 * @param { Object } state - Initial state of the character reducer
 * @param { String } action - dispatch action type to change state accordingly.
 * @returns { Object } state - return the updated state based on action type
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHARACTERS_ASYNC:
      return {
        ...state,
        all_characters: state.all_characters.concat(action.payload),
      };
    case actionTypes.SORT_DATA_BY_ASCENDING:
      return {
        ...state,
        all_characters: state.all_characters
          .slice()
          .sort((a, b) => a.id - b.id),
      };

    case actionTypes.SORT_DATA_BY_DESCENDING:
      return {
        ...state,
        all_characters: state.all_characters
          .slice()
          .sort((a, b) => b.id - a.id),
      };
    default:
      return state;
  }
};

