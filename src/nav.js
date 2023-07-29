import './style.css';
import { Link} from 'react-router-dom';
const Nav = () => {
    return(
        <>
        <div className='nav'>
            <div className='nav1'>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/profile'><li>Profile</li></Link>
                    <Link to='/settings'><li>Settings</li></Link>
                </ul>
            </div>
            <div className='nav2'>
                <ul>
                    <Link to='/login'  className='span1'><li>SIGN IN</li></Link>
                    <Link to='/register' className='span2'><li >REGISTER</li></Link>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Nav