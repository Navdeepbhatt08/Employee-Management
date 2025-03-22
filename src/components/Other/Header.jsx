import { React, useState } from "react"
import { setLocalStorage } from "../../utils/localStorage"


const Header = () => {

    // const [username, setUsername] = useState('')

    //     if(!data)
    //     {
    //         setUsername('Admin')
    //     }
    //     else
    //     setUsername(data.firstName)


    const logOutUser = () => {
        window.alert('You are leaving this page..')
        localStorage.setItem('loggedInUser','')
        window.location.reload()


    }


    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl  font-medium'> hello ,<br /> <span className='text-3xl font-semibold'>userName👋</span> </h1>
            <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 cursor-pointer  rounded-lg text-lg font-medium'>
                Log Out
            </button>
        </div>
    )
}

export default Header