import React from "react";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../../../reducers";
import GenderView from "../GenderView";
import { mapDispatchToProps } from "../GenderView";
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
  const wrapper = shallow(<GenderView store={mockStore} {...props} />);
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

describe("check GenderView component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp().dive().dive();
  });

  test("generate snapshot for genderView component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("check genderview component render without crash", () => {
    const genderComponent = findByTestAttr(wrapper, "component-gender");
    expect(genderComponent.length).toBe(1);
  });

  test("check `gender checkbox form` render without crash", () => {
    const genderFormComponent = findByTestAttr(
      wrapper,
      "component-gender-form"
    );
    expect(genderFormComponent.length).toBe(1);
  });

  test('check `addGenderFilteredData` function inside mapDispatchToProps', () => {
    const dispatchSpy = sinon.spy();
    mockStore.dispatch = dispatchSpy
    const { addGenderFilteredData } = mapDispatchToProps(dispatchSpy);
    addGenderFilteredData('Male');
    const spyLastCall = dispatchSpy.args[0][0];
    const expectedAction = actionCreator.addGenderFilteredData("Male")
    expect(spyLastCall.types).toEqual(expectedAction.types);
  });

  test('check `removeGenderFilteredData` function inside mapDispatchToProps', () => {
    const dispatchSpy = sinon.spy();
    mockStore.dispatch = dispatchSpy
    const { removeGenderFilteredData } = mapDispatchToProps(dispatchSpy);
    removeGenderFilteredData('Male');
    const spyLastCall = dispatchSpy.args[0][0];
    const expectedAction = actionCreator.removeGenderFilteredData("Male")
    expect(spyLastCall.types).toEqual(expectedAction.types);
  });
});
