import React from 'react'
import { useSelector } from 'react-redux'


const Notification = () => {
  const notification = useSelector(state => state.notification)

    if (notification.shown === 'SHOW NOTICE') {
      return (
        <div className='vote-notice'>
          {notification.content}
        </div>
      )
    }
    return null
}

export default Notification