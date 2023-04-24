import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { createApi } from "unsplash-js";
import { NavBar } from "../components/Navbar";
import { HomeImg } from "../components/HomeImg";
import App from "../App";

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
