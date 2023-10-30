import Header from './Head/Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div>
          <h1>This is common view</h1>
            <Header />
            {/* Dynamic content */}
            <Outlet />
            <h1>Footer</h1>
        </div>
      )
}

export default UserLayout