import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Configure the enzyme in root folder and it's available inside each component.
Enzyme.configure({ adapter: new EnzymeAdapter() });