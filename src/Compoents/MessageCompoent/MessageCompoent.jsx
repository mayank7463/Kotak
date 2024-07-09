import React from 'react'

const MessageCompoent = ({message}) => {
  return (
    <div className='message-component-wrapper mix-blend-multiply'>
      <img className='mix-blend-darken h-10' src="./message/quetosimg.png" alt="" />
      <p>{message}</p>
    </div>
  )
}

export default MessageCompoent
