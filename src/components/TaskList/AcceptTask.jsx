import React from 'react'

const AcceptTask = ({data}) => {

  return (
    <div className='h-full w-[300px] bg-blue-600 p-5 rounded-4xl flex-shrink-0'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category} </h3>
        <h4 className='text-base'>{data.taskDate}</h4>
    </div>
    <h2 className=' mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className=' text-sm mt-2'>{data.taskDescription}
    </p>
    <div className='mt-30 flex justify-center '>
        <button className=' w-[80%]  bg-green-600  py-1 px-2 text-sm rounded-lg text-black'>Accept task </button>
    </div>
    </div>
  )
}

export default AcceptTask