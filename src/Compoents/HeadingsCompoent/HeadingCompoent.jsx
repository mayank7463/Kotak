import React from 'react'

const HeadingComponent = ({heading,image}) => {
  return (
    <div className='flex my-3'>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className='heading-blue-bold-text'>{heading}</h3>
      </div>
    </div>
  )
}

export default HeadingComponent
