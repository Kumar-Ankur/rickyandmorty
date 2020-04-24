import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('check footer component', () => {
    test('generate snapshot for footer component', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    test('check footer component render without crash', () => {
        const wrapper = shallow(<Footer />);
        const footerComponent = wrapper.find(`[data-test='component-footer']`);
        expect(footerComponent.length).toBe(1);
    });
})