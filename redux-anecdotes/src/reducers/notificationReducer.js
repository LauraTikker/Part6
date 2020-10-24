
let timeOutId;

const initialState = {
    shown: 'DO NOT SHOW',
    content: '',
    timeOutIds: []
}

const clearTimeoutArray = () => {
    return {
        type: 'CLEAR',
    }
}

export const showNotification = (notificationToShow, timeOutId) => {
    return {
        type: 'SHOW',
        data: {
            content: notificationToShow,
            timeOutId: timeOutId
        }
    }
}

export const setNotification = (notificationToShow, time) => {
    return async dispatch => {
        dispatch(clearTimeoutArray)
        timeOutId = setTimeout(() => {
            dispatch({
                type: 'HIDE'
            })
        }, time*1000)
        dispatch(showNotification(notificationToShow, timeOutId))
    }
}

const notificationReducer = (state = initialState, action) =>  {
    switch (action.type)  {
        case 'SHOW':
            return {
                shown: 'SHOW NOTICE',
                content: action.data.content,
                timeOutIds: state.timeOutIds.concat(action.data.timeOutId)
            }
        case 'HIDE':
            return {
                shown: 'HIDE',
                content: '',
                timeOutIds: []
            }
        case 'CLEAR':
            return {
                shown: 'HIDE',
                content: '',
                timeOutIds: []
            }
        default:
            return state
    }
}

export default notificationReducer