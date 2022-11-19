import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Profile from '../Components/Profile/Profile'
import axios from '../Utils/axios'
import { useParams } from 'react-router-dom';

function ProfilePage() {
    let params=useParams()
    let [singleData,setSingleData] = useState()
    // getting details of an employee
    let EmployeeProfile = (id)=>{
        axios.get(`employee/${id}/`)
        .then((response)=>{            
            setSingleData(response.data)
        })
    }
    useEffect(() => {
      EmployeeProfile(params.id)
    }, [])
  return (
    <div>
        <NavBar/>
        <Profile data={singleData}/>
    </div>
  )
}

export default ProfilePage