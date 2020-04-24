import React from "react";
import { shallow } from "enzyme";
import CheckBox from "../CheckBox";

/**
 * Factory function to create a shallowwrapper for the App component.
 * @function setUp
 * @param { Object } props - Component props specific to this setup
 * @param { Object } state - Initial state for setUp
 * @returns { shallowWrapper }
 *
 */
function setUp(props = {}) {
  return shallow(<CheckBox {...props} />);
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

describe("check checkbox component", () => {
  let wrapper;
  const props = {
    data: "Human",
    addFilter: jest.fn(),
    removeFilter: jest.fn()
  };
  beforeEach(() => {
    wrapper = setUp(props);
  });

  test("generate snapshot for checkbox component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("check checkbox component render without crash", () => {
      const componentCheckbox = findByTestData(wrapper, 'component-checkbox');
      expect(componentCheckbox.length).toBe(1);
  });

  test('check onclick event working without error', () => {
      const getFilteredDataMock = jest.fn();
      const event = { target: { checked: true, value: 'test'}}
      const componentCheckbox = findByTestData(wrapper, 'component-checkbox');
      componentCheckbox.simulate('click', event);
      expect(componentCheckbox.props().name).toBe('Human');
  })
});
