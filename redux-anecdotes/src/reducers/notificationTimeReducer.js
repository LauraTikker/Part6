
const initialState = {
    time: 0
}

export const setNotificationTime = () => {
    return {
        type: 'START',
    }
}

export const endNotificationTime = () => {
    return {
        type: 'END',
    }
}


const notificationTimeReducer = (state = initialState, action) =>  {
    switch (action.type)  {
        case 'START':
            return {
                time: 5,
            }
        case 'END':
            return {
                time: 0,
            }
        
        default:
            return state
    }
}

export default notificationTimeReducer