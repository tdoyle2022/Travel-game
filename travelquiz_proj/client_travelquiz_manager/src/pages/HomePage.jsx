import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
// import "./style.css";
import { createApi } from "unsplash-js";
import { NavBar } from "../components/Navbar";
import { HomeImg } from "../components/HomeImg";
// import { SignUp } from "../components/SignUp"
// import { useContext } from "react";
// import { currUser, logOut } from "../utilities";
import App from "../App";
// import { UserContext } from "../App";
// import { getToken } from "./components/CsrfToken";

export function HomePage() {
  
  // const [user, setUser] = useState(null);

  // getToken()

  // useEffect(() => {
  //   const getCurrUser = async () => {
  //     setUser(await currUser());
  //   };
  //   getCurrUser();
  // }, []);

  // const user = useContext(UserContext);
  // const setUser = useContext(UserContext)

  return (
    <>
    {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <h1 style={{fontFamily: 'cursive'}}>HELLO {currUser && currUser.name}</h1>
            <button onClick={()=>logOut(setUser)}>LOG OUT</button>
    </div> */}
    <NavBar />
    <HomeImg />
    <Link to={'/signup'}>Sign UP  </Link>
    <h1>Choose a <Link to='/quiz'>Quiz!</Link></h1>
    </>
  )
}
