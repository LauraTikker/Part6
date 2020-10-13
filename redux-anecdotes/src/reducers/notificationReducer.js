
const initialState = {
    shown: 'DO NOT SHOW',
    content: ''
}

export const showVotingNotification = (content) => {
    return {
        type: 'VOTED',
        data: {
            content: content
        }
    }
}

export const showNewAnecdoteNotice = (content) => {
    return {
        type: 'NEW ANECDOTE',
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
                shown: 'SHOW VOTING NOTICE',
                content: action.data.content
            }
        case 'NEW ANECDOTE':
            return {
                shown: 'SHOW NEW ANECDOTE NOTICE',
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