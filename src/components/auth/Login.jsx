import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
    
  

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    const logInUser = () => {
        window.location.reload()
    }

    return (
        <div className=' h-screen w-screen flex items-center justify-center'>
            <div className='border-2 rounded-2xl border-blue-400 p-20'>
                <form onSubmit={(e) => { submitHandler(e) }} className=' flex flex-col items-center justify-center '>
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                        required className='taxt-black outline-none border-2 border-blue-400 py-3 px-5 text-xl rounded-full ' type="email" placeholder='Enter Your Email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='taxt-black outline-none border-2 border-blue-400 py-3 px-5 text-xl rounded-full mt-4' type="password" placeholder='Password' />
                    <button onClick={logInUser} className='mt-5 taxt-black outline-none bg-blue-400 border-none py-3 px-5 text-xl rounded-full w-full cursor-pointer'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login