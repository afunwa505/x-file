import './style.css';


const Settings = () => {
    return(
        <>
        <div className='settings'>
            <form name='form3' action='' method=''>
            <input type='text' name='firstName' placeholder='Change First Name' className='name'>
                </input>
                <br />
                <input type='text' name='lastName' placeholder='Change Last Name' className='name'>
                </input>
                <br />
                <input type='text' name='userName' placeholder='Change User Name' className='name'>
                </input>
                <br />
                <input type='email' name='email' placeholder='Change E-Mail' className='name'>
                </input>
                <br /><br />
                <label>Change profile picture</label>
                <br />
                <input type='file' name='file' className='file'></input>
                <br />
                <input type='submit' name='submit' value='Submit' className='btn'></input>
                <br />
            </form>
        </div>
        </>
    )
} 
export default Settings;