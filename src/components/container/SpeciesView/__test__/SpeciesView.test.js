import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SpeciesView, { mapDispatchToProps } from '../SpeciesView';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../../../../reducers';
import * as actionCreator from "../../../../actions";

const middleware = createSagaMiddleware();
const mockStore = createStore(rootReducer, applyMiddleware(middleware));

function setUp(props={}) {
    return shallow(<SpeciesView store={ mockStore} {...props}/>)
}

function findByTestData(wrapper, val) {
    return wrapper.find(`[data-test='${val}']`);
}

describe('check species component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp().dive().dive();
    });

    test('generate snapshot for species component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('check species container render without crash', () => {
        const speciesComponent = findByTestData(wrapper, 'component-species');
        expect(speciesComponent.length).toBe(1);
    });

    test('check species form container render without error', () => {
        const formComponent = findByTestData(wrapper, 'component-species-form');
        expect(formComponent.length).toBe(1);
    });

    test('check `addFilteredData` working inside mapDispatchToProps', () => {
        const dispatchSpy = sinon.spy();
        mockStore.dispatch = dispatchSpy;
        const { addFilteredData } = mapDispatchToProps(dispatchSpy);
        addFilteredData('Human');
        const lastSpyCall = dispatchSpy.args[0][0];
        const expectedAction = actionCreator.addFilteredData('Human');
        expect(lastSpyCall.types).toEqual(expectedAction.types);
    });

    test('check `removeFilteredData` working inside mapDispatchToProps', () => {
        const dispatchSpy = sinon.spy();
        mockStore.dispatch = dispatchSpy;
        const { removeFilteredData } = mapDispatchToProps(dispatchSpy);
        removeFilteredData('Human');
        const lastSpyCall = dispatchSpy.args[0][0];
        const expectedAction = actionCreator.removeFilteredData('Human');
        expect(lastSpyCall.types).toEqual(expectedAction.types);
    });
})