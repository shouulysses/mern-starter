/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './reducers/AppReducer';
import posts from './reducers/PostReducer';
import intl from './reducers/IntlReducer';
import auth from './reducers/AuthReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  auth
});
