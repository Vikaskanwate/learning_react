import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-10'>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
    </div>
  )
}

export default RightContent