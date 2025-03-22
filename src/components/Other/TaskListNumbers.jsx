import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-10 screen'>
    <div className="  rounded-xl w-[45%] py-6 px-9 bg-blue-400">

        <h2 className='text-3xl font-semibold  '>{data.taskBreakdown.newTask}</h2>
        <h3 className='text-xl font-medium'>New task</h3>
    </div>
    <div className="  rounded-xl w-[45%] py-6 px-9 bg-green-400">

        <h2 className='text-3xl font-semibold  '>{data.taskBreakdown.completed}</h2>
        <h3 className='text-xl font-medium'>Completed task</h3>
    </div>
    <div className="  rounded-xl w-[45%] py-6 px-9 bg-red-400">

        <h2 className='text-3xl font-semibold  '>{data.taskBreakdown.active}</h2>
        <h3 className='text-xl font-medium'>Active task</h3>
    </div>
    <div className="  rounded-xl w-[45%] py-6 px-9 bg-yellow-500">

        <h2 className='text-3xl font-semibold  '>{data.taskBreakdown.failed}</h2>
        <h3 className='text-xl font-medium'>Failed task</h3>
    </div>


    </div>
  )
}

export default TaskListNumbers