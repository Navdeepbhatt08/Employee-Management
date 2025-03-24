import { React, useState } from "react"

const Header = (props) => {

    const logOutUser = () => {
        window.alert('You are leaving this page..')
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
    }


    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl  font-medium'> Hey ,<br /> <span className='text-3xl font-semibold'>There 👋</span> </h1>
            <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 cursor-pointer  rounded-lg text-xl font-medium'>
                Log Out
            </button>
        </div>
    )
}

export default Header