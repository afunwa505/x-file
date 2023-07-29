import './style.css';
import { Link } from 'react-router-dom';

const Profile = () => {
    return(
        <>
        <div className='profile'>
            <div className='user'>Afunwa Uchechukwu
            </div>
            <div className='profilePic'></div>
        </div>
        <div className='items'>
            <Link to='/audio'>Audio</Link>
            <Link to='/image'>Image</Link>
            <Link to='/video'>Video</Link>
            <Link to='/document'>Document</Link>
            <Link to='/upload'>Upload File</Link>
        </div>
        </>
    )
} 
export default Profile;