import React from 'react'

const CreateTask = () => {
  return (
    <div >
    <form  className=' flex w-full flex-wrap bg-gray-800 items-start  justify-between rounded-xl mt-10 p-5'>
        <div className='w-1/2 mx- p-5 rounded-xl'> 
        <div>
        <div><h3>Task Title</h3>
        <input type="text" placeholder='Ui Design'  className='p-1  border-2 border-gray-500 w-[70%] rounded-md mb-3'/></div> 
             <h3>Date</h3>
            <input type="date" className='p-1  border-2 border-gray-500 w-[70%] rounded-md mb-3'/></div>
        <div><h3>Assign to</h3>
            <input type="text" placeholder='Employee Name' className='p-1  border-2 border-gray-500 w-[70%] rounded-md mb-3' /></div>
        <div><h3>Catagory</h3>
            <input type="text" placeholder='Design , Dev ,etc' className='p-1  border-2 border-gray-500 w-[70%] rounded-md mb-3' /></div>
        </div>
        
        <div className='w-2/5 flex flex-col items-start p-5' ><h3>Description</h3>
            <textarea name="" id=""  className='p-1 h-50 border-2 border-gray-500 w-[70%] rounded-md mb-3'></textarea>
            <button className='p-2   border-2 bg-blue-500 border-gray-500 w-[70%] rounded-md mb-3 font-[500]'>Create Task</button>
            </div>
          
    </form>
</div>
  )
}

export default CreateTask