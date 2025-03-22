import React, { useState, useEffect, useContext } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const app = () => {

  const [user, setUser] = useState(null)

  const [loggedinUserData, setLoggedinUserData] = useState()
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
       setUser(userData.role);
       setLoggedinUserData(userData.data);
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser({ role: 'admin' })

      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    }
    else if (userData) {

      const employee = userData.find((e) => email == e.email && e.password == password);
      if (employee) {
        setUser({ role: employee })
      }
      setUser('employee')
      setLoggedinUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))


    }
    else {
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser ={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser ={setUser} data={loggedinUserData} /> : null)}

    </>
  )
}

export default app