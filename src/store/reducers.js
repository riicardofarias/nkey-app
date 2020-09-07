import { combineReducers } from 'redux';

import auth from '../pages/auth/_reducer';
import event from '../pages/events/_reducer';

const rootReducer = combineReducers({
    auth, event
});

export default rootReducer;