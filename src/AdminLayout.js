import React from 'react'
import Header from './Head/Header'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <h1>This is admin view</h1>
        <Header />
        {/* Dynamic content */}
        <Outlet />
        <h1>Footer</h1>
    </div>
  )
}

export default AdminLayout