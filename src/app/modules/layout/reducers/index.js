import { combineReducers } from 'redux';

import globalLoader from './globalLoader';
import topmenu from './topmenu';

export default combineReducers({
  globalLoader,
  topmenu
});