import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import EmployeeTable from './EmployeeTable'

const Body = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/> 
      <EmployeeTable/>
    </div>
  )
}

export default Body
