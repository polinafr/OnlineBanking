import Navbar from "../../components/Navbar"
import { Link, Outlet, useLocation } from "react-router-dom"
import { AuthContext } from "../../context"
import { useContext } from "react"

export const ManagerPage = () => {
    const location = useLocation()
    let { isAuth } = useContext(AuthContext)

    return (
        <>  
            <Navbar/>
            {location.pathname === '/manager' && 
            <div className="center-align">
                <h1>Manager page</h1>
                {isAuth ? 
                <Link className="waves-effect blue-grey darken-1 btn" to="account">User requests</Link> 
                : 
                <Link className="waves-effect blue-grey darken-1 btn" to="register">Create account</Link>
                }
            </div>}
            <Outlet/>
        </>
    )
}