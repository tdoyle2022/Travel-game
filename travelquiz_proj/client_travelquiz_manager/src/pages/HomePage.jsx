import { Link } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { HomeImg } from "../components/HomeImg";

export function HomePage() {
  
  return (
    <>
    <NavBar />
    <HomeImg />
    <Link to={'/signup'}>Sign UP  </Link>
    <h1>Choose a <Link to='/quizcategories'>Quiz!</Link></h1>
    </>
  )
}
