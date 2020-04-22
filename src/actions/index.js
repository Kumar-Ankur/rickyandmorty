import * as actionTypes from "../types";

/**
 * @function getCharacters
 * @description action types for fetching characters data from API using saga file and update the state.
 */
export function getCharacters() {
  return { type: actionTypes.GET_CHARACTERS };
}

/**
 * @function getFilteredData
 * @param { Object } data - Filtered data
 * @description - filtered data based on payload value.
 */
export function getFilteredData(data) {
  return { type: actionTypes.GET_FILTERED_DATA, payload: data };
}

/**
 * @function sortAscendingById
 * @description - sort all the character data in ascending order
 */
export function sortAscendingById() {
  return { type: actionTypes.SORT_DATA_BY_ASCENDING };
}

/**
 * @function sortDescendingById
 * @description - sort all the character data in descending order.
 */
export function sortDescendingById() {
  return { type: actionTypes.SORT_DATA_BY_DESCENDING };
}

/**
 * @function addFilteredData
 * @param { String } data
 * @description - add filtered data in string for species category state
 */
export function addFilteredData(data) {
  return { type: actionTypes.ADD_FILTERED_DATA, payload: data };
}

/**
 * @function removeFilteredData
 * @param { String } data
 * @description - remove filtered data in string for species category state
 */
export function removeFilteredData(data) {
  return { type: actionTypes.REMOVE_FILTERED_DATA, payload: data };
}

/**
 * @function addGenderFilteredData
 * @param { String } data
 * @description - add filtered data in string for gender category state
 */
export function addGenderFilteredData(data) {
  return { type: actionTypes.ADD_GENDER_FILTERED_DATA, payload: data };
}

/**
 * @function removeGenderFilteredData
 * @param { String } data
 * @description - remove filtered data in string for gender category state
 */
export function removeGenderFilteredData(data) {
  return { type: actionTypes.REMOVE_GENDER_FILTERED_DATA, payload: data };
}

/**
 * @function addOriginFilteredData
 * @param { String } data
 * @description - add filtered data in string for origin category state
 */
export function addOriginFilteredData(data) {
  return { type: actionTypes.ADD_ORIGIN_FILTERED_DATA, payload: data };
}

/**
 * @function removeOriginFilteredData
 * @param { String } data
 * @description - remove filtered data in string for origin category state
 */
export function removeOriginFilteredData(data) {
  return { type: actionTypes.REMOVE_ORIGIN_FILTERED_DATA, payload: data };
}

/**
 * @function addSearchText
 * @param { String } data
 * @description - add search data in string for search category state
 */
export function addSearchText(data) {
  return { type: actionTypes.ADD_SEARCH_TEXT, payload: data };
}
