import { combineReducers } from 'redux';

import auth  from './auth/reducer';
import event from './events/reducer';
import user  from './users/reducer';
import alert  from './alerts/reducer';

const rootReducer = combineReducers({
    auth, event, user, alert
});

export default rootReducer;