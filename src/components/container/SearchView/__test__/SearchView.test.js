import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import SearchView from "../SearchView";
import { mapDispatchToProps } from "../SearchView";
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
  const wrapper = shallow(<SearchView store={mockStore} {...props} />);
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

describe('check search component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp().dive();
    });

    test('generate snapshot for search component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('check search component render without crash', () => {
      const componentSearch = findByTestAttr(wrapper, "component-search");
      expect(componentSearch.length).toBe(1);
    });

    test('check input field render without error', () => {
      const componentInput = findByTestAttr(wrapper, 'component-input');
      expect(componentInput.length).toBe(1);
    });

    test('check `addSearchText` function call in mapDispatchToProps', () => {
      const dispatchSpy = sinon.spy();
      mockStore.dispatch = dispatchSpy;
      const { addSearchText } = mapDispatchToProps(dispatchSpy);
      addSearchText('Test')
      const lastSpyCall = dispatchSpy.args[0][0];
      const expectedAction = actionCreator.addSearchText('Test');
      expect(lastSpyCall.types).toEqual(expectedAction.types);
    });

    test('check `handleChange` function call on input change', () => {
      const input = findByTestAttr(wrapper, 'component-input');
      const addSearchTextMock = jest.fn();
      const instance = wrapper.instance();
      instance.addSearchText = addSearchTextMock;
      const event = { target: { value: 'test'}}
      input.simulate('change', event);
      instance.addSearchText();
      expect(addSearchTextMock).toHaveBeenCalled();
    })
})