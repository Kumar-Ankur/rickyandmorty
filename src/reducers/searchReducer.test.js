import searchReducer from "./searchReducer";
import * as actionTypes from "../types";

const initialState = {
  search_text: "",
};

describe('search reducer functionality', () => {
    test('check reducer with dummy action name', () => {
        const action = { type: 'dummy_action'};
        expect(searchReducer(undefined, action)).toEqual(initialState);
    });

    test('check addSearchReducer functionality', () => {
        const action = { type: actionTypes.ADD_SEARCH_TEXT, payload: 'test'}
        const expectedState = { search_text: 'test'}
        expect(searchReducer(undefined, action)).toEqual(expectedState);
    });
})