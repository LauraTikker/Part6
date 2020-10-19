import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'
import anecdoteFilterReducer from './anecdoteFilterReducer'

const reducer = combineReducers({
      anecdotes: anecdoteReducer,  
      notification: notificationReducer,
      filter: anecdoteFilterReducer
    })

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store