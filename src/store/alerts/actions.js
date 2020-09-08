import * as alertTypes from './alertTypes';

export const success = (message) => {
    return { type: alertTypes.ALERT_SUCCESS, message: message }
}

export const error = (message) => {
    return { type: alertTypes.ALERT_ERROR, message: message }
}