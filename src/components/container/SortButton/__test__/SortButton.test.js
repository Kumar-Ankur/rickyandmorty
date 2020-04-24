import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import SortButton, { mapDispatchToProps } from "../SortButton";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../../../reducers";
import * as actionCreator from "../../../../actions";

const middleware = createSagaMiddleware();
const mockStore = createStore(rootReducer, applyMiddleware(middleware));

/**
 * Factory function to create a shallowwrapper for the App component.
 * @function setUp
 * @param { Object } props - Component props specific to this setup
 * @param { Object } state - Initial state for setUp
 * @returns { shallowWrapper }
 *
 */
function setUp(props = {}) {
  return shallow(<SortButton store={mockStore} {...props} />);
}

/**
 * Return shallowWarpper containing node(s) with the given data-test attribute
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute for search
 * @returns { shallowWrapper}
 */
function findByTestData(wrapper, val) {
  return wrapper.find(`[data-test='${val}']`);
}

describe("check sort button component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp().dive();
  });

  test("genrate snapshot for sort button component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("check sort ascending button render without error", () => {
    const sortAscBtn = findByTestData(wrapper, "component-btn-asc");
    expect(sortAscBtn.length).toBe(1);
  });

  test("check sort descending button render without error", () => {
    const sortDescBtn = findByTestData(wrapper, "component-btn-desc");
    expect(sortDescBtn.length).toBe(1);
  });

  test("check `sortAscendingById` function call from mapDispatchToProps", () => {
    const dispatchSpy = sinon.spy();
    mockStore.dispatch = dispatchSpy;
    const { sortAscendingById } = mapDispatchToProps(dispatchSpy);
    sortAscendingById();
    const lastSpyCall = dispatchSpy.args[0][0];
    const expectedAction = actionCreator.sortAscendingById();
    expect(lastSpyCall.types).toEqual(expectedAction.types);
  });

  test("check `sortDescendingById` function call from mapDispatchToProps", () => {
    const dispatchSpy = sinon.spy();
    mockStore.dispatch = dispatchSpy;
    const { sortDescendingById } = mapDispatchToProps(dispatchSpy);
    sortDescendingById();
    const lastSpyCall = dispatchSpy.args[0][0];
    const expectedAction = actionCreator.sortDescendingById();
    expect(lastSpyCall.types).toEqual(expectedAction.types);
  });

  test('check onClick method on sortAscendingButton', () => {
    const sortAscBtn = findByTestData(wrapper, "component-btn-asc");
    const sortAscendingByIdMock = jest.fn();
    const instance = wrapper.instance();
    instance.sortAscendingById = sortAscendingByIdMock;
    sortAscBtn.simulate('click');
    instance.sortAscendingById();
    expect(sortAscendingByIdMock).toHaveBeenCalled();
  });

  test('check onClick method on sortAscendingButton', () => {
    const sortAscBtn = findByTestData(wrapper, "component-btn-desc");
    const sortDescendingByIdMock = jest.fn();
    const instance = wrapper.instance();
    instance.sortDescendingById = sortDescendingByIdMock;
    sortAscBtn.simulate('click');
    instance.sortDescendingById();
    expect(sortDescendingByIdMock).toHaveBeenCalled();
  });
});
