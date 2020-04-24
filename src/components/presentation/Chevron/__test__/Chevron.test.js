import React from 'react';
import { shallow } from 'enzyme';
import Chevron from '../Chevron';

describe('check chevron component', () => {

    test('generate snapshot for chevron component', () => {
        const wrapper = shallow(<Chevron />);
        expect(wrapper).toMatchSnapshot();
    });

    test('check chevron component render without crash', () => {
        const wrapper = shallow(<Chevron />);
        const componentChevron = wrapper.find(`[data-test='component-chevron']`);
        expect(componentChevron.length).toBe(1);
    });
})