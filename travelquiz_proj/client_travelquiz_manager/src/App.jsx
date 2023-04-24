import { createContext, useEffect, useState } from "react";
import "./App.css";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { currUser, logOut } from "./utilities";
import { getToken } from "./components/CsrfToken";
import { Outlet } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { NavBar } from "./components/Navbar";
import { HomeImg } from "./components/HomeImg";
// import ReactDOM from "react-dom";
// import React, { Fragment } from "react";
// import "./style.css";
// import { createApi } from "unsplash-js";

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);

  getToken()

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);
  

  return (
    <>
      <div className="App">
        <UserContext.Provider value={{user, setUser}} >
          <Outlet />
          {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <h1 style={{fontFamily: 'cursive'}}>HELLO {user && user.name}</h1>
            <button onClick={()=>logOut(setUser)}>LOG OUT</button>
          </div> */}
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <h1 style={{fontFamily: 'cursive', paddingRight: '20px', paddingTop: '40px'}}>HELLO {user && user.name}</h1>
            <button style={{marginLeft: '20px', paddingTop: '5px', backgroundColor: 'black', marginTop: '40px'}} onClick={()=>logOut(setUser)}>LOG OUT</button>
          </div>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;