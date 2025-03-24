import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [tasktDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({ taskTitle, taskDescription, tasktDate, category, active: false, newTask: true, failed: false, completed: false })

    const data = userData

    data.forEach(function (elem) {

      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskBreakdown.newTask = elem.taskBreakdown.newTask + 1
      }
    })
    setUserData(data)
    console.log(data);

    setTaskTitle('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setAssignTo('')

  }

  return (
    <div >
      <form onSubmit={(e) => { submitHandler(e) }} className=' flex w-full flex-wrap bg-gray-800 items-start  justify-between rounded-xl mt-10 p-5'>
        <div className='w-1/2 mx- p-5 rounded-xl'>
          <div>
            <div><h3>Task Title</h3>
              <input value={taskTitle}
                onChange={(e) => { setTaskTitle(e.target.value) }}
                type="text" placeholder='Your title here..' className='p-1 text-lg border-2 border-gray-500 w-[70%] rounded-md mb-3' /></div>
            <h3 >Date</h3>
            <input
              value={tasktDate}
              onChange={(e) => { setTaskDate(e.target.value) }}
              type="date" className='p-1 text-lg  border-2 border-gray-500 w-[70%] rounded-md mb-3' /></div>
          <div><h3>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => { setAssignTo(e.target.value) }}
              type="text" placeholder='Employee Name' className='p-1  text-lg  border-2 border-gray-500 w-[70%] rounded-md mb-3' /></div>

          <div><h3>Catagory</h3>
            <select value={category}     onChange={(e) => { setCategory(e.target.value) }} className='p-1  text-lg  border-2 border-gray-500 w-[70%] rounded-md mb-3 bg-gray-800'  >
              <option>Select an option</option>
              <option >Designer</option>
              <option >Marketing</option>
              <option >Advertising</option>
              <option >Developer</option>
              <option >Android Developer</option>
    
            </select> </div>
        </div>

        <div className='w-2/5 flex flex-col items-start p-5' ><h3>Description</h3>
          <textarea value={taskDescription}
            onChange={(e) => { setTaskDescription(e.target.value) }} name="" id="" className='p-1 h-50 border-2  text-lg  border-gray-500 w-[70%] rounded-md mb-3'></textarea>
          <button className='p-2 cursor-pointer text-lg border-2 bg-blue-600 border-gray-500 w-[70%] rounded-lg mb-3 '>Create Task</button>
        </div>

      </form>
    </div>
  )
}

export default CreateTask