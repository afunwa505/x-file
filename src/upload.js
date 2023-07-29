import './style.css';

const Upload = () =>{
    return(
        <>
        <div className='upload'>
            <form>
                <label>Upload File</label>
                <br /><br />
                <input type='file'  name='file' className='file'/>  
                <br /><br />
                <label>Select storage Location</label>
                
               <select className='select'>
                    <option> Audio</option>
                    <option> Image</option>
                    <option> Video</option>
                    <option>Document</option>
               </select>
               <input type='submit' value='Upload' className='btn'></input>
            </form>
        </div>
        </>
    )
}
export default Upload;