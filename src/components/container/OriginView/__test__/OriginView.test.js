import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../../../reducers";
import OriginView from "../OriginView";
import { mapDispatchToProps } from "../OriginView";
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
  const wrapper = shallow(<OriginView store={mockStore} {...props} />);
  return wrapper;
}

/**
 * Return shallowWarpper containing node(s) with the given data-test attribute
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute for search
 * @returns { shallowWrapper}
 */
function findByTestAttr(wrapper, val) {
  return wrapper.find(`[data-test="${val}"]`);
}

describe("check origin component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp().dive().dive();
  });

  test("generate snapshot for origin component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("check originView component render without crash", () => {
    const componentOrigin = findByTestAttr(wrapper, "component-origin");
    expect(componentOrigin.length).toBe(1);
  });

  test("check origin checkbox form render without crash", () => {
    const checkbox = findByTestAttr(wrapper, "component-origin-form");
    expect(checkbox.length).toBe(1);
  });

  test("check `addOriginFilteredData` function inside mapDispatchToProps working fine", () => {
    const dispatchSpy = sinon.spy();
    mockStore.dispatch = dispatchSpy;
    const { addOriginFilteredData } = mapDispatchToProps(dispatchSpy);
    addOriginFilteredData("Earth");
    const lastSpyCall = dispatchSpy.args[0][0];
    const expectedAction = actionCreator.addOriginFilteredData("Earth");

    expect(lastSpyCall.types).toEqual(expectedAction.types);
  });

  test("check `removeOriginFilteredData` function inside mapDispatchToProps working fine", () => {
    const dispatchSpy = sinon.spy();
    mockStore.dispatch = dispatchSpy;
    const { removeOriginFilteredData } = mapDispatchToProps(dispatchSpy);
    removeOriginFilteredData("Earth");
    const lastSpyCall = dispatchSpy.args[0][0];
    const expectedAction = actionCreator.removeOriginFilteredData("Earth");

    expect(lastSpyCall.types).toEqual(expectedAction.types);
  });
});
