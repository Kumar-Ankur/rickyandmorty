import speciesReducer from "./speciesReducer";
import * as actionTypes from "../types";

const initialState = {
  filter_data: [],
};
describe("species reducer test suite", () => {
    test('check with dummy action, return initial state', () => {
        const action = { type: 'dummy_action'};
        expect(speciesReducer( undefined, action )).toEqual(initialState);
    });

    test('check getFiltered data action', () => {
        const action = { type: actionTypes.GET_FILTERED_DATA, data: 'Human'};
        const expectedState = { filter_data: ['Human']}
        expect(speciesReducer(undefined, action)).toEqual(expectedState);
    });

    test('check addFilteredData action', () => {
        const action = { type: actionTypes.ADD_FILTERED_DATA, payload: 'Human'};
        const expectedState = { filter_data: ['Human']}
        expect(speciesReducer(undefined, action)).toEqual(expectedState);
    });

    test('check removeFilteredData action', () => {
        const action = { type: actionTypes.REMOVE_FILTERED_DATA, payload: 'Human'};
        const expectedState = { filter_data: []}
        expect(speciesReducer(undefined, action)).toEqual(expectedState);
    })
});
