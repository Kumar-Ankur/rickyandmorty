import { put, takeLatest, call, all } from "redux-saga/effects";
import * as constants from "../constants";
import * as actionTypes from "../types";

/**
 * @function getCharactersAsync
 * @description - dispatch an action when data are fetched from API alongwith payload data passed to reducer to update the state.
 */
export function* getCharactersAsync() {
  try {
    const endpoint = constants.ENDPOINT_URL;
    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    yield all([
      put({ type: actionTypes.GET_CHARACTERS_ASYNC, payload: data.results }),
    ]);
  } catch (error) {
    console.error(error);
    yield put({ type: actionTypes.REQUESTED_DATA_ERROR, payload: constants.REQUESTED_DATA_ERROR_TEXT })
  }
}

/**
 * @function getCharacters
 * @returns dispatch the generator function  'GET_CHARACTERS' to fetch data from API.
 */
export function* getCharacters() {
  yield takeLatest("GET_CHARACTERS", getCharactersAsync);
}
export default function* rootSaga() {
  yield all([getCharacters()]);
}
