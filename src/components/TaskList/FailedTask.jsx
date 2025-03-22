import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-yellow-600 p-5 rounded-4xl flex-shrink-0'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category} </h3>
        <h4 className='text-base'>{data.taskDate} </h4>
      </div>
      <h2 className=' mt-5 text-2xl font-semibold'>{data.taskTitle} </h2>
      <p className=' text-sm mt-2'>{data.taskdescription} </p>
      <div className='mt-10 flex justify-center '>
        <button className=' w-[80%]  bg-red-500 py-1 px-2 text-sm rounded-lg'>Failed </button>
      </div>
    </div>
  )
}

export default FailedTask