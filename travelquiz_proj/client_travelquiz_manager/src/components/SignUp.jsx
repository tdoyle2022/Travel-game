import { useState, useEffect } from 'react'
import { signUp } from '../utilities'
import axios from 'axios'

export const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=> {
        console.log(name, email, password)
    }, [name, email, password])

    return (
        <form onSubmit={(e)=>[e.preventDefault(), signUp(name, email, password), setName(''), setEmail(''), setPassword('') ]} style={{display: 'flex', flexDirection: 'column'}}>
            <h3>Sign Up</h3>
            <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" value={password} type='password' onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value='signUp'/>

        </form>
    )
}
export default SignUp