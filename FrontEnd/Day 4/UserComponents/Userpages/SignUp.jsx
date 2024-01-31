import '../Userstyles/SignUp.css'
function SignUp() {
    return (
        <div className='signup-page'>
            <form>
                <div className='signup-box'>
                    <h2>Create Your Account</h2>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <input type='text' placeholder='Company'/>
                    <input type='text' placeholder='Location'/>
                    <button type='submit'>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp