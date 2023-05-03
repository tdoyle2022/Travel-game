import { Link } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { HomeImg } from "../components/HomeImg";

export function HomePage() {
  
  return (
    <>
    <main style={{marginTop: '300px', marginBottom: '2rem'}}>
    {/* <NavBar /> */}
    {/* <HomeImg /> */}
    <Link to={'/signup'}>Sign UP  </Link>
    <h1 style={{color: 'orangered'}}>Choose a <Link to='/quizcategories'>Quiz!</Link></h1>
    </main>
    </>
  )
}
