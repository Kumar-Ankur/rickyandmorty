import originReducer from "./originReducer";
import * as actionTypes from "../types";

const initialState = {
  filter_origin_data: [],
};

describe('origin reducer test suite', () => {
    test('check origin reducer with dummy action', () => {
        const action = { type: 'dummy_action'}
        expect(originReducer(undefined, action)).toEqual(initialState)
    });

    test('check origin reducer with add new filtered data', () => {
        const action = { type: actionTypes.ADD_ORIGIN_FILTERED_DATA, payload: 'Earth'}
        const expectedState = { filter_origin_data: ['Earth']}
        expect(originReducer(undefined, action)).toEqual(expectedState);
    });

    test('check origin reducer with remove item', () => {
        const action = { type: actionTypes.REMOVE_ORIGIN_FILTERED_DATA, payload: 'Earth'}
        const expectedState = { filter_origin_data: [] }
        expect(originReducer(undefined, action)).toEqual(expectedState);
    })
})