import React, { useState, useEffect, useContext } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const app = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
  if(authData){
    const  loggedInUser = localStorage.getItem('loggedInUser ')
      if(loggedInUser)
      {
        setUser(loggedInUser.role)
      }
  }
  
  }, )
  


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
       
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

    }
    else if (authData && authData.employees.find((e)=> email == e.email && e.password ==password)) {
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))


    }
    else {
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default app