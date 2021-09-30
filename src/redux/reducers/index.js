import { combineReducers } from 'redux';
import authReducer from './auth';
import policyReducer from './policy';
import accountReducer from './account';

const rootReducer = combineReducers({
  policy: policyReducer,
  auth: authReducer,
  account: accountReducer
});

export default rootReducer;