import { createContext, useEffect, useState } from "react";
import "./App.css";
import { currUser, logOut } from "./utilities";
import { getToken } from "./components/CsrfToken";
import { Outlet } from "react-router-dom";


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