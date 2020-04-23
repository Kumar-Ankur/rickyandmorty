import {
  getCharacters,
  getFilteredData,
  sortAscendingById,
  sortDescendingById,
  addFilteredData,
  removeFilteredData,
  addGenderFilteredData,
  removeGenderFilteredData,
  addOriginFilteredData,
  removeOriginFilteredData,
  addSearchText,
} from "./";
import configureStore from "redux-mock-store";
import * as actionTypes from "../types";

const mockStore = configureStore();
const store = mockStore();

describe("action test", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("check `getCharacters` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.GET_CHARACTERS,
      },
    ];
    store.dispatch(getCharacters());
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `getFilteredData` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.GET_FILTERED_DATA,
        payload: {},
      },
    ];
    store.dispatch(getFilteredData({}));
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `sortAscendingById` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.SORT_DATA_BY_ASCENDING,
      },
    ];
    store.dispatch(sortAscendingById());
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `sortDescendingById` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.SORT_DATA_BY_DESCENDING,
      },
    ];
    store.dispatch(sortDescendingById());
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `addFilteredData` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.ADD_FILTERED_DATA,
        payload: "Human",
      },
    ];
    store.dispatch(addFilteredData("Human"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `removeFilteredData` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.REMOVE_FILTERED_DATA,
        payload: "Human",
      },
    ];
    store.dispatch(removeFilteredData("Human"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `addGenderFilteredData` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.ADD_GENDER_FILTERED_DATA,
        payload: "Male",
      },
    ];
    store.dispatch(addGenderFilteredData("Male"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `removeGenderFilteredData` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.REMOVE_GENDER_FILTERED_DATA,
        payload: "Male",
      },
    ];
    store.dispatch(removeGenderFilteredData("Male"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `addOriginFilteredData` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.ADD_ORIGIN_FILTERED_DATA,
        payload: "Earth (C-137)",
      },
    ];
    store.dispatch(addOriginFilteredData("Earth (C-137)"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `removeOriginFilteredData` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.REMOVE_ORIGIN_FILTERED_DATA,
        payload: "Earth (C-137)",
      },
    ];
    store.dispatch(removeOriginFilteredData("Earth (C-137)"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("check `addSearchText` action working without error", () => {
    const expectedAction = [
      {
        type: actionTypes.ADD_SEARCH_TEXT,
        payload: "test",
      },
    ];
    store.dispatch(addSearchText("test"));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
