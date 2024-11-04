import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({childern}) => {
    const {currentUser} = useAuth

    if(currentUser){
        return childern
    }

    return <Navigate to="/login" replace/>
}

export default PrivateRouter