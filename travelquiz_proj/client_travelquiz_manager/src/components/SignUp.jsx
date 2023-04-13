export const SignUp = () => {
    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <h3>Sign Up</h3>
            <input placeholder="name"/>
            <input placeholder="email"/>
            <input placeholder="password" type='password'/>
            <input type="submit" value='signUp'/>

        </form>
    )
}
export default SignUp