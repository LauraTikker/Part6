import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { endNotificationTime } from '../reducers/notificationTimeReducer'


const Notification = () => {
  const notification = useSelector(state => state.notification)
  const timer = useSelector(state => state.timer)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
        dispatch(endNotificationTime())
    }, 5000)
    return () => clearTimeout(timer)
  })

  if (timer.time !== 0) {
    if (notification.shown === 'SHOW VOTING NOTICE') {
      return (
        <div className='vote-notice'>
          {`You voted for anecdote: ${notification.content}`}
        </div>
      )
    }
    if (notification.shown === 'SHOW NEW ANECDOTE NOTICE') {
      return (
        <div className='new-anecdote-notice'>
          {`You added new anecdote: ${notification.content}`}
        </div>
      )
    }
  } else {
    return null
  }
}

export default Notification