import React from "react";
import { shallow } from "enzyme";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../../../reducers";
import GenderView from "../GenderView";

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

  test("check `getCheckBoxData` call without error", () => {
    const getCheckBoxDataMock = jest.fn();
    const instance = wrapper.instance();
    instance.getCheckBoxData = getCheckBoxDataMock;
    instance.getCheckBoxData();
    expect(getCheckBoxDataMock).toHaveBeenCalled();
  });

  test("check `addGenderFilteredData` call without error", () => {
    const addGenderFilteredDataMock = jest.fn();
    const instance = wrapper.instance();
    instance.addGenderFilteredData = addGenderFilteredDataMock;
    instance.addGenderFilteredData();
    expect(addGenderFilteredDataMock).toHaveBeenCalled();
  });

  test("check `removeGenderFilteredData` call without error", () => {
    const removeGenderFilteredDataMock = jest.fn();
    const instance = wrapper.instance();
    instance.removeGenderFilteredData = removeGenderFilteredDataMock;
    instance.removeGenderFilteredData();
    expect(removeGenderFilteredDataMock).toHaveBeenCalled();
  });

  test("check `getGenderBox` call without error", () => {
    const getGenderBoxMock = jest.fn();
    const instance = wrapper.instance();
    instance.getGenderBox = getGenderBoxMock;
    instance.getGenderBox();
    expect(getGenderBoxMock).toHaveBeenCalled();
  });
});
