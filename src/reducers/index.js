import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import genderReducer from './genderReducer';
import originReducer from './originReducer';
import speciesReducer from './speciesReducer';
import searchReducer from './searchReducer';

/**
 * @function rootReducer
 * @description - combineReducer used to make a rootReducer as a single point of contact to reducer.
 */
const rootReducer = combineReducers({
  character: characterReducer,
  gender: genderReducer,
  origin: originReducer,
  species: speciesReducer,
  search: searchReducer
})

export default rootReducer;
