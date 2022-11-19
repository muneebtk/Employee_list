import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import EmployeeTable from '../Components/Table/EmployeeTable'
import axios from '../Utils/axios'
function HomePage() {
    let [empData,setEmpData] = useState('')
    // getting the details of all employees
    let allEmployee = ()=>{
        axios.get()
        .then((response)=>{
            setEmpData(response.data)
        })
        .catch((error)=>{
        })
    }
    useEffect(() => {
      allEmployee()
    }, [])
    
  return (
    <div>
        <NavBar/>
        {empData?empData.map((obj)=>
        <EmployeeTable data={obj} />
        ):null}
    </div>
  )
}

export default HomePage