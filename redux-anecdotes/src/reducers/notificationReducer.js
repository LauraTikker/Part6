

const initialState = {
    shown: 'DO NOT SHOW',
    content: ''
}

export const showNotification = (notificationToShow) => {
    return {
        type: 'SHOW',
        data: {
            content: notificationToShow
        }
    }
}

export const setNotification = (notificationToShow, time) => {
    return async dispatch => {
        dispatch(showNotification(notificationToShow))
        setTimeout(() => {
            dispatch({
                type: 'HIDE'
            })
        }, time*1000)
    }
}  

const notificationReducer = (state = initialState, action) =>  {
    switch (action.type)  {
        case 'SHOW':
            return {
                shown: 'SHOW NOTICE',
                content: action.data.content
            }
        case 'HIDE':
            return {
                shown: 'HIDE',
                content: ''
            }
        default:
            return state
    }
}

export default notificationReducer