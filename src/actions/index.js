import * as actionTypes from '../types';

export function getCharacters() {
    return ({ type: actionTypes.GET_CHARACTERS });
}

export function getFilteredData(data) {
    return ({ type: actionTypes.GET_FILTERED_DATA, payload: data })
}

export function sortAscendingById() {
    return ({ type: actionTypes.SORT_DATA_BY_ASCENDING });
}

export function sortDescendingById() {
    return ({ type: actionTypes.SORT_DATA_BY_DESCENDING });
}

export function addFilteredData(data) {
    return ({ type: actionTypes.ADD_FILTERED_DATA, payload: data })
}

export function removeFilteredData(data) {
    return ({ type: actionTypes.REMOVE_FILTERED_DATA, payload: data })
}

export function addGenderFilteredData(data) {
    return ({ type: actionTypes.ADD_GENDER_FILTERED_DATA, payload: data })
}

export function removeGenderFilteredData(data) {
    return ({ type: actionTypes.REMOVE_GENDER_FILTERED_DATA, payload: data })
}

export function addOriginFilteredData(data) {
    return ({ type: actionTypes.ADD_ORIGIN_FILTERED_DATA, payload: data })
}

export function removeOriginFilteredData(data) {
    return ({ type: actionTypes.REMOVE_ORIGIN_FILTERED_DATA, payload: data })
}

export function addSearchText(data) {
    return ({ type: actionTypes.ADD_SEARCH_TEXT, payload: data })
}