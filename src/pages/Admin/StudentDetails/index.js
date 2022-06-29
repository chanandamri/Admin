import { useEffect, useContext } from 'react';
import { headerText } from '../../../context/hederText';
import './style.css'

// Creator : Team E - Ariel
export default function StudentDetails(props){
    const {firstName, lastName, TR ,TF, assessment} = props;

    
    const sortedList = Array(props).sort((a,b)=>a.name.common> b.name.common?1:-1)
    
    const [hederText, setHeaderText] = useContext(headerText);

    useEffect(()=>{
        setHeaderText("Student Details")
    },[])

    return(
        <>
        <div className="student-details-body">
            <h3 className="title">Student Name</h3>
            <h1 className="name">{firstName} {lastName}</h1>
            <div className="graphs">
                <div className="assessment">
                    <h5>assessment {}</h5>
                    {/* {assessment.graph} */}
                </div>
                <div className="reading">
                    <h5>reading {TR}</h5>
                    {/* {TR.graph} */}
                </div>
                <div className="focus">
                    <h5>focus {TF}</h5>
                    {/* {TF.graph} */}
                </div>
                <hr />
                <div>
                    {/* {sortedList.map(()=>{return <ActivityByDate />})} */}
                </div>
            </div>
        </div>
        </>
    )
}

function ActivityByDate(){
    return(
        <div className="activityByDate"></div>
    )
}