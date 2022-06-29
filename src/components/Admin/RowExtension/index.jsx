import { Link } from 'react-router-dom'
import Graphs from './Graphs'
import './style.css'



// Creator : Team e - 
function RowExtension(){
    return <>
    <Graphs/>
    <Link className='linkToStudentDetails' to="/StudentDetails" >
    <img className="detailed"src={require("./detailed.png")} alt="detailed"/>
    </Link>
    </>
}


export default RowExtension