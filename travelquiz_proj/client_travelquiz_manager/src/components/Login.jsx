import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavBar } from "./Navbar";
import { HomeImg } from "./HomeImg";
import { Link } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    async function login(loginData) {
        const response = await axios.put('users/'
            , loginData)
            if (response.status == 200)
            {(navigate('/home'))}
            else {(error => console.log(error))}

    }
    return (
        <>
        <NavBar />
        <HomeImg />
        <form onSubmit={handleSubmit(login)}>
            <h3>Log In</h3>
            <input {...register("email")} placeholder="email"/>
            <input {...register("password")} placeholder="password" type='password'/>
            <input type="submit" />
            <Link to='/'></Link>
        </form>
        </>
    )
}
export default Login