import React from "react";
import { shallow } from "enzyme";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../../../reducers";
import App from "../App";

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
  const wrapper = shallow(<App store={mockStore} {...props} />);
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

describe("App component", () => {
  test("snapshot testing for app component", () => {
    const wrapper = setUp();
    expect(wrapper).toMatchSnapshot();
  });

  test("render app without crash", () => {
    const wrapper = setUp().dive().dive();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  test("sort component render without crash", () => {
    const wrapper = setUp().dive().dive();
    const sortComponent = findByTestAttr(wrapper, "component-sort");
    expect(sortComponent.length).toBe(1);
  });

  test("accodion component render without crash", () => {
    const wrapper = setUp().dive().dive();
    const accordionComponent = findByTestAttr(wrapper, "component-accordion");
    expect(accordionComponent.length).toBe(1);
  });

  test("search component render without crash", () => {
    const wrapper = setUp().dive().dive();
    const searchComponent = findByTestAttr(wrapper, "component-search");
    expect(searchComponent.length).toBe(1);
  });

  test("list component render without crash", () => {
    const wrapper = setUp().dive().dive();
    const listComponent = findByTestAttr(wrapper, "component-content");
    expect(listComponent.length).toBe(1);
  });
});

describe("function condition validate inside app component", () => {
  let wrapper;
  let instance;
  const getCharactersMock = jest.fn();
  const props = {
    getCharacters: getCharactersMock
  }
  beforeEach(() => {
    wrapper = setUp(props).dive().dive();
    instance = wrapper.instance();
  });

  test('check `getCharacters` call on componentDidMount', () => {
    const getCharactersMock = jest.fn();
    instance.getCharacters = getCharactersMock;
    instance.getCharacters();
    expect(getCharactersMock).toHaveBeenCalled(); 
  });

  test("check `getFilteredItem` call without error", () => {
    const getSpeciesFilterMock = jest.fn();
    instance.getSpeciesFilter = getSpeciesFilterMock;
    instance.getFilteredItem();
    expect(getSpeciesFilterMock).toHaveBeenCalled();
  });

  test("check `getSpeciesFilter` call without error", () => {
    const getGenderFilterMock = jest.fn();
    instance.getGenderFilter = getGenderFilterMock;
    const all_characters = [];
    const filter_data = [];
    instance.getSpeciesFilter(all_characters, filter_data);
    expect(getGenderFilterMock).toHaveBeenCalled();
  });

  test('check `getGenderFilter` call without error', () => {
    const getOriginFilterMock = jest.fn();
    instance.getOriginFilter = getOriginFilterMock;
    const filteredItem = [];
    instance.getGenderFilter(filteredItem);
    expect(getOriginFilterMock).toHaveBeenCalled();
  });

  test('check `getOriginFilter` call without error', () => {
      const getSearchDataMock = jest.fn();
      instance.getSearchData = getSearchDataMock;
      instance.getOriginFilter();
      expect(getSearchDataMock).toHaveBeenCalled();
  });

  test('check `getSearchData` call without error', () => {
      const getSearchDataMock = jest.fn();
      instance.getSearchData = getSearchDataMock;
      instance.getSearchData();
      expect(getSearchDataMock).toHaveBeenCalled();
  })
});
