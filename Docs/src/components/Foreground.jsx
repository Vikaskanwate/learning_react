import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc:"This data is comming from the data object .",
            filesize:".9mb",
            close:false,
            tag:{isOpen : true, tagTitle : "Downlaod Now" ,tagColor : "green"},

        },
        {
            desc:"This data is comming from the data object .",
            filesize:".9mb",
            close:false,
            tag:{isOpen : true, tagTitle : "Downlaod Now" ,tagColor : "blue"},

        },
        {
            desc:"This data is comming from the data object .",
            filesize:".9mb",
            close:false,
            tag:{isOpen : true, tagTitle : "Downlaod Now" ,tagColor : "green"},

        },
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
        {/* <Card/> */}
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground