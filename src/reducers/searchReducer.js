import * as actionTypes from "../types";

const initialState = {
    search_text: ''
  };

/**
 * @function searchReducer
 * @param { Object } state - Initial state of the character reducer
 * @param { String } action - dispatch action type to change state accordingly.
 * @returns { Object } state - return the updated state based on action type
 */
  export default  (state = initialState, action ) => {
      switch( action.type ) {
        case actionTypes.ADD_SEARCH_TEXT:
            return {
              ...state,
              search_text: action.payload
            }
     
         default:
           return state;
      }
  }