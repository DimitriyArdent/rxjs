import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'
 

const ProtectedRoute = ({path}) => {
    let isPossible = true
  if(path ){
    return(
        isPossible ? <Outlet/> : <Navigate to="/login"/>
    )
 }
 
     
}

export default ProtectedRoute