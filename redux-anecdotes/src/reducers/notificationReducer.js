
const initialState = {
    shown: 'DO NOT SHOW',
    content: ''
}

export const showNotification = (content) => {
    return {
        type: 'VOTED',
        data: {
            content: content
        }
    }
}

export const hideNotification = () => {
    return {
        type: 'HIDE',
        data: {
            content: ''
        }
    }
}

const notificationReducer = (state = initialState, action) =>  {
    switch (action.type)  {
        case 'VOTED':
            return {
                shown: 'SHOW',
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