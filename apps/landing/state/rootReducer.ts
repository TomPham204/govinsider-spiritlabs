import { combineReducers } from 'redux';

import profileStore from './profile/reducer';

const appReducer = combineReducers({
  profileStore,
});

export default appReducer;
