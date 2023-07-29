import './style.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <>
        <div className='login'>
            <form name='form1' action='' method=''>
                <input type='text' name='userName' placeholder='Enter your User Name' className='userName'>

                </input>
                <br />
                <input type='password' name='userName' placeholder='Enter your Password' className='password'>

                </input>
                <br />
                <input type='submit' name='submit' value='Log In' className='btn'></input>
                <br />
                <Link to='/forgotPassword'>Forgotten Password?</Link>
            </form>
        </div>
        </>
    )
} 
export default Login;