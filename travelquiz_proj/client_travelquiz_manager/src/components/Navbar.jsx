import { Link } from "react-router-dom"

export const NavBar = ()=> {
    return (
        <div>
            <h1></h1>
            <div>
            <Link to={'/'}>Sign UP  </Link>
            <Link to={'login'}>LogIn</Link>
            </div>
        </div>
    )
}