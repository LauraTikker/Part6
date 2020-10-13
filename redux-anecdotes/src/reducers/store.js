import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'
import notificationTimeReducer from './notificationTimeReducer'
import anecdoteFilterReducer from './anecdoteFilterReducer'

const reducer = combineReducers({
      anecdotes: anecdoteReducer,  
      notification: notificationReducer,
      timer: notificationTimeReducer,
      filter: anecdoteFilterReducer
    })

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store