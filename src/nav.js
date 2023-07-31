import { useState } from 'react';
import './style.css';
import { Link} from 'react-router-dom';
const Nav = () => {
    const [cancel, setCancel] = useState(false);
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
            <i class="fa fa-bars fa-2x"></i>

            {
                cancel && <i class="fa fa-times" aria-hidden="true"></i>
            }

        </div>
        
        </>
    )
}
export default Nav