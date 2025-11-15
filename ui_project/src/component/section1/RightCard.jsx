import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80  rounded-4xl'>
      <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='absolute top-0 left-0 h-full w-full bg-amber-300 p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
        <div>
          <p className='text-lg leading-normal text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident soluta sunt porro omnis.</p>

          <div className='flex justify-between'>

            <button className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-full '>Satisfied</button>
            <button className='bg-blue-600 text-white font-semibold px-5 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RightCard