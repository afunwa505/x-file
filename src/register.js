import './style.css';

const Register = () => {
    return(
        <>
        <div className='register'>
            <form name='form2' action='' method=''>
            <input type='text' name='firstName' placeholder='Enter your First Name' className='name'>
                </input>
                <br />
                <input type='text' name='lastName' placeholder='Enter your Last Name' className='name'>
                </input>
                <br />
                <input type='text' name='userName' placeholder='Choose a User Name' className='name'>
                </input>
                <br />
                <input type='password' name='password1' placeholder='Choose a strong password' className='password'>
                </input>
                <br />
                <input type='password' name='userName2' placeholder='Re-type your password
                ' className='password'>
                </input>
                <br />
                <input type='email' name='email' placeholder='Enter your E-Mail' className='name'>
                </input>
                <br />
                <input type='submit' name='submit' value='Register' className='btn'></input>
                <br />
            </form>
        </div>
        </>
    )
}
export default Register;