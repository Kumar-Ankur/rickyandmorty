import * as actionTypes from "../types";

const initialState = {
  all_characters: [],
  filter_data: [],
  filter_gender_data: [],
  filter_origin_data: [],
  search_text: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHARACTERS_ASYNC:
      return {
        ...state,
        all_characters: state.all_characters.concat(action.payload),
      };

    case actionTypes.GET_FILTERED_DATA:
      return {
        ...state,
        filter_data: state.filter_data.concat(action.data),
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
          .concat(state.filter_gender_data.slice(idx + 1, state.filter_gender_data.length)),
      };

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
          .concat(state.filter_origin_data.slice(OriginIdx + 1, state.filter_origin_data.length)),
      };

    case actionTypes.ADD_SEARCH_TEXT:
       return {
         ...state,
         search_text: action.payload
       }

    default:
      return state;
  }
};

export default rootReducer;
