import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

const PrivateWrapper = ({ children }) => {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user

  if (!isUser) {
    return <Navigate to='/login'></Navigate>
  }
  return <>{children}</>
}

export default PrivateWrapper
