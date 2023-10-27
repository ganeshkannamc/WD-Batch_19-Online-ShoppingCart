import React from 'react'
import Header from './Head/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header />
        {/* Dynamic content */}
        <Outlet />
        <h1>Footer</h1>
    </div>
  )
}

export default Layout