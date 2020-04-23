import { takeLatest, put, call, all } from "redux-saga/effects";
import rootSaga, { getCharacters, getCharactersAsync } from "./";
import * as constants from "../constants";
import * as actionTypes from "../types";

describe("get characters saga test", () => {
  const genObj = getCharacters();

  it('check root saga call', () => {
    const rootObj = rootSaga();
    expect(rootObj.next().value).toEqual(call(getCharacters))
  });

  it("should wait for every latest get characters action and call getCharactersAsync", () => {
    expect(genObj.next().value).toEqual(
      takeLatest("GET_CHARACTERS", getCharactersAsync)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObj.next().done).toBeTruthy();
  });

  it("should call api and dispatch error action", async () => {
    const generator = getCharactersAsync();
    const endpoint = constants.ENDPOINT_URL;
    expect(generator.next().value).toEqual(call(fetch, endpoint));
    expect(generator.next().value).toEqual(
      put({
        type: actionTypes.REQUESTED_DATA_ERROR,
        payload: "Something went wrong",
      })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
