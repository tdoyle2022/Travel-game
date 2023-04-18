import { createContext, useEffect, useState } from "react";
import "./App.css";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { currUser, logOut } from "./utilities";
import { getToken } from "./components/CsrfToken";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage"

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
    <div className="App">
      <button onClick={()=>logOut(setUser)}>LOG OUT</button>
      <h1>HELLO {user && user.name}</h1>
      <NavBar />

      <UserContext.Provider value={{user, setUser}} >
        <Outlet />
      </UserContext.Provider>

    </div>
  );
}

export default App;