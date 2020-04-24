import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';

describe('check list item component', () => {
    test('generate snapshot', () => {
        const item = {
            image: '',
            name: 'test',
            id: 1,
            created: '',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            origin: { name: 'Earth'},
            location: { name: 'Earth'}
        }
        const wrapper = shallow(<ListItem item={ item }/>);
        expect(wrapper).toMatchSnapshot();
    })
})