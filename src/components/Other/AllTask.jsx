import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {


    const [userData, setUserData] = useContext(AuthContext)



    return (
        <div>
            <div className=' bg-gray-800 mt-5 rounded-xl p-5 '>

                <div className='bg-blue-700 mb-2  py-2 px-4 rounded-xl flex justify-between text-lg font-sans text-center'>
                    <h2 className=' text-lg w-1/5 '>Employee Name </h2>
                    <h3 className=' text-lg w-1/5 ' >New Task</h3>
                    <h5 className=' text-lg w-1/5 ' >Active Task </h5>
                    <h5 className=' text-lg w-1/5 ' >Completed Task </h5>
                    <h5 className=' text-lg w-1/5 ' >Failed</h5>
                </div>

                <div >
                    {userData.map(function (elem, idx) {

                        return <div key={idx} className='bg-transparent border-2 border-emerald-800 mb-2  py-2 px-4 rounded-xl flex justify-between text-center'>
                            <h2 className=' text-lg font-medium w-1/5 '> {elem.firstName} </h2>
                            <h3 className=' text-lg font-medium w-1/5 ' >{elem.taskBreakdown.newTask}</h3>
                            <h5 className=' text-lg font-medium w-1/5 ' >{elem.taskBreakdown.active}</h5>
                            <h5 className=' text-lg font-medium w-1/5 ' >{elem.taskBreakdown.completed}</h5>
                            <h5 className=' text-lg font-medium w-1/5 text-red-600 ' >{elem.taskBreakdown.failed} </h5>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default AllTask