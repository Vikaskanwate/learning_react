import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-10'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx+1} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent