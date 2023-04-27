import { createContext, useEffect, useState } from "react";
import "./App.css";
import { currUser, logOut } from "./utilities";
import { getToken } from "./components/CsrfToken";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'


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
  
  // const deleteUser = async () => {
  //   try {
  //     const response = await axios.delete(`/api/delete_user/${user}`);
  //     if (response.status === 204) {
  //       setUser(null);
  //       history.push('/');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting user:', error);
  //   }
  // };

  return (
    <>
      <div className="App">
        <UserContext.Provider value={{user, setUser}} >
          <Outlet />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <h1 style={{fontFamily: 'cursive', paddingRight: '20px', paddingTop: '40px'}}>HELLO {user && user.name}</h1>
            <button style={{marginLeft: '20px', paddingTop: '5px', backgroundColor: 'black', marginTop: '40px'}} onClick={()=>logOut(setUser)}><Link to='/'>LOG OUT</Link></button>
            {/* <button style={{marginLeft: '20px', paddingTop: '5px', backgroundColor: 'red', marginTop: '40px'}} onClick={deleteUser}>Delete Account</button> */}
          </div>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;