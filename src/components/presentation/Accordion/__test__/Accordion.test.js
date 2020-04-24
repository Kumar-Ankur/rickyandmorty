import React, { useRef } from "react";
import { shallow } from "enzyme";
import Accordion from "../Accordion";

/**
 * Factory function to create a shallowwrapper for the App component.
 * @function setUp
 * @param { Object } props - Component props specific to this setup
 * @param { Object } state - Initial state for setUp
 * @returns { shallowWrapper }
 *
 */
function setUp(props = {}) {
  const wrapper = shallow(<Accordion {...props} />);
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

describe("check accordion component", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);
  beforeEach(() => {
    wrapper = setUp({ title: "Test", content: "Test" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  test("generate snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("check accordion compoent render without crash", () => {
    const componentAccordion = findByTestAttr(wrapper, "component-accordion");
    expect(componentAccordion.length).toBe(1);
  });

  test("check accordion button render without crash", () => {
    const componentBtn = findByTestAttr(wrapper, "component-button");
    expect(componentBtn.length).toBe(1);
  });

  test("check accordion content render without crash", () => {
    const componentContent = findByTestAttr(
      wrapper,
      "component-accordion-content"
    );
    expect(componentContent.length).toBe(1);
  });

  test("render accordion text witjout crash", () => {
    const accordionText = findByTestAttr(wrapper, "component-accordion-text");
    expect(accordionText.length).toBe(1);
  });

  test("check onclick event on button", () => {
    const componentBtn = findByTestAttr(wrapper, "component-button");
    componentBtn.simulate("click");
    expect(wrapper.props().children[1].ref.current).toBe(null)
  });
});
