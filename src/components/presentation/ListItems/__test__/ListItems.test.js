import React from 'react';
import { shallow } from 'enzyme';
import ListItems from '../ListItems';

describe('check list items', () => {
    test('generate snapshot for listitems', () => {
        const wrapper = shallow(<ListItems filteredItem={[1,2,3]} />);
        expect(wrapper).toMatchSnapshot();
    })
})