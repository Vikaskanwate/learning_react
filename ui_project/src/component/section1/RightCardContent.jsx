import React from 'react'

const RightCardContent = () => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
            <div>
                <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident soluta sunt porro omnis.</p>

                <div className='flex justify-between'>

                    <button className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-full '>Satisfied</button>
                    <button className='bg-blue-600 text-white font-semibold px-5 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
                </div>

            </div>
        </div>
    )
}

export default RightCardContent