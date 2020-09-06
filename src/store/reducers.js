import { combineReducers } from 'redux';

import auth from '../pages/auth/_reducer'

const rootReducer = combineReducers({
    auth
});

export default rootReducer;