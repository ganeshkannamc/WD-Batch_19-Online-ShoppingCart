import React from 'react'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div>
        <h1>Welcome to my shopping cart. Login to access</h1>
        <Outlet/>
        <h1>Visit us very often</h1>
    </div>
  )
}

export default LoginLayout