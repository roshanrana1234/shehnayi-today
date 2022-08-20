import { Link, Outlet } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <div className='flex justify-end bg-gray-500 '>
                <nav className='flex gap-4 p-3 text-white ' >
                    <Link to="/" >Home</Link>
                    <Link to="test" >Test</Link>
                    <Link to="dash" >DashBoard</Link>
                    <Link to="login" >Login</Link>
                    <Link to="staff_panel_page" >Staff DashBoard</Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar