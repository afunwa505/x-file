import './style.css';
import { Link} from 'react-router-dom'
const Footer = () =>{
    return (
        <>
        <div className='footer'>
            <div><Link to='/terms-and-condition'>Terms and Conditions</Link></div>
            
            <Link to='/about'>About</Link>
            <Link to='/contact'> Contact</Link>
            <div>&copy;2023. All Rights Reserved</div>
        </div>
        </>
    )
}
export default Footer;