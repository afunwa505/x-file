import './style.css';
import { useState } from 'react';
import { Link} from 'react-router-dom';
const Nav = () => {
    
    const [nav, setNav] = useState(false);
    const [hamburger, setHamburger] = useState(true);
    const [close, setClose] = useState(false);
    function Show () {
        setNav(true);
        setHamburger(false);
        setClose(true);
    }
    function Hide () {
        setNav(false);
        setHamburger(true);
        setClose(false);
    }
    function Remove () {
        setNav(false);
        setHamburger(true);
        setClose(false);
    }
    return(
       
        <>
        <div className='nav'>
            <div className='nav1'>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/profile'><li>Profile</li></Link>
                    <Link to='/settings'><li>Settings</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/contact'> <li>Contact</li></Link>
                </ul>
            </div>
            <div className='nav2'>
                <ul>
                    <Link to='/login'  className='span1' onClick={Remove}><li>SIGN IN</li></Link>
                    <Link to='/register' className='span2' onClick={Remove}><li >REGISTER</li></Link>
                </ul>
            </div>

            {
                hamburger && <i class="fa fa-bars fa-2x" onClick={Show}></i>
            }

            {
                close && <i class="fa fa-times fa-2x" aria-hidden="true" onClick={Hide}></i>
            }

           {
            nav &&  <div className='mobileNav'>
            <Link to='/' onClick={Remove}>Home</Link> 
            <Link to='/profile' onClick={Remove}>Profile</Link> 
            <Link to='/settings' onClick={Remove}>Settings</Link>         
            <Link to='/about' onClick={Remove}>About</Link>
            <Link to='/contact' onClick={Remove}> Contact</Link>
        </div>
           }

        </div>
       
        </>
    )
}
export default Nav