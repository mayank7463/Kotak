import React from 'react'

const CalloutType01 = ({data,desc,showTri}) => {
  return (
    <div className='callout-container'> 
      <div className="data-type01 flex">
       <div>{data} </div>{showTri&&<div className='mt-3'><img className='h-3 object-contain' src="./Buisness/trainglesmall.png" alt="" /></div>}
      </div>
      <div className='h-[5px] w-full bg-red-500'></div>
      <div>{desc}</div>
    </div>
  )
}

export default CalloutType01
