import './style.css';

const ForgotPassword = () => {
    return (
        <>
        <div className='forgotPassword'>
        <input type='text' name='firstName' placeholder='Enter your First Name' className='name'>
                </input>
                <br />
        <input type='text' name='userName' placeholder='Enter your User Name' className='userName'>

            </input>
            <br />
            <input type='email' name='email' placeholder='Enter your E-Mail' className='name'>
                </input>
                <br />
                <p> A code will be sent to the E-Mail you provided during registration</p>
                <input type='submit' name='submit' value='Send' className='btn'></input>
                <br />
                <input type='text' name='code' placeholder='Enter code ' className='name'>
                </input>
                <br />
                <input type='password' name='password1' placeholder='Choose a new Password' className='password'>

                </input>
                <br />
                <input type='password' name='password2' placeholder='Re-type Password' className='password'>

                </input>
                <br />
                <input type='submit' name='submit' value='Submit' className='btn'></input>
                <br />
        </div>
        </>
    )
}
export default ForgotPassword;