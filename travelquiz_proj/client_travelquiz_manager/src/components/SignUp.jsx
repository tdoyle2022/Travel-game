import { useState, useEffect } from 'react'
import { signUp } from '../utilities'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { HomeImg } from './HomeImg'

export const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=> {
        console.log(name, email, password)
    }, [name, email, password])

    return (
        <>
        <HomeImg />
        <form onSubmit={(e)=>[e.preventDefault(), signUp(name, email, password), setName(''), setEmail(''), setPassword('') ]} style={{display: 'flex', flexDirection: 'column', width: '400px',
        margin: '0 auto' }}>
            <h3>Sign Up</h3>
            <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" value={password} type='password' onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value='signUp'/>
        </form>
        <Link to='/' style={{paddingRight: '20px'}}>Home</Link>
        <Link to='/login' style={{paddingLeft: '20px'}}>Login</Link>
        </>
    )
}
export default SignUp