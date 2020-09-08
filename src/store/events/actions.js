import apiEvent from '../../api/apiEvent'
import * as actionTypes from './actionTypes';

export const getEvents = () => {
    return function (dispatch) {
        apiEvent.fetchAll().then(({ data }) => {
            dispatch({ type: actionTypes.EVENT_FETCH_ALL, events: data })
        }).catch((e) => {
            dispatch({ type: actionTypes.EVENT_FETCH_ALL, events: [], errors: e.response?.data.error })
        })
    }
}

export const getById = (id) => {
    return function (dispatch) {
        apiEvent.fetchOne(id).then(({ data }) => {
            dispatch({ type: actionTypes.EVENT_FETCH_ONE, event: data })
        }).catch((e) => {
            dispatch({ type: actionTypes.EVENT_FETCH_ONE, event: {}, errors: e.response?.data.error })
        })
    }
}

export const create = (event) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: actionTypes.EVENT_ADD, event: event, isLoading: true })

        apiEvent.create(event).then(({ data }) => {
            dispatch({ type: actionTypes.EVENT_ADD, event: {}, isLoading: false })
            resolve(data)
        }).catch((err) => {
            dispatch({ type: actionTypes.EVENT_ADD, event: event, isLoading: false })
            reject(err.response?.data)
        });
    });
}

export const update = (event) =>  dispatch => {
    return new Promise((resolve, reject) => {
        apiEvent.update(event).then(({ data }) => {
            dispatch({ type: actionTypes.EVENT_UPDATE, event: data })
            resolve(data)
        }).catch((err) => {
            dispatch({ type: actionTypes.EVENT_UPDATE, event: event })
            reject(err.response?.data)
        });
    });
}

export const deleteById = (id) =>  dispatch => {
    return new Promise((resolve, reject) => {
        apiEvent.deleteById(id).then(({ data }) => {
            dispatch({ type: actionTypes.EVENT_DELETE })
            resolve(data)
        }).catch((err) => {
            dispatch({ type: actionTypes.EVENT_DELETE })
            reject(err.response?.data)
        });
    });
}