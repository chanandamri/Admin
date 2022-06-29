import { popupContext } from '../../../context/Admin/Popup'
import './style.css'
import MainButton from '../../../components/Admin/MainButton'
import Table from '../../../components/Admin/Table'
import ButtonListClass from '../../../components/Admin/ButtonListClass'
import { useEffect, useContext } from 'react'
import EditClass from '../../../components/Admin/EditClass'
import { headerText } from '../../../context/hederText'
import { userContext } from '../../../context/Admin/User'

// Creator : Team E - Chanan
function Classroom() {

    const {user} = useContext(userContext)
    console.log("classroom",user);


    const [hederText, setHeaderText] = useContext(headerText);
    
    useEffect(()=>{
        setHeaderText("")
    },[])

    const { popup, setPopup } = useContext(popupContext)
    function onSubmit(e) {
        e.preventDefault();
        console.log("i'm changing the server");
        setPopup(false)

    }
if (!user) return (<div>no user</div>)
    return <>
        <div className='container11'>
            <div className='addButton' >
                <MainButton onClick={() => setPopup(<EditClass onSubmit={onSubmit} >Add class</EditClass>)} >
                    Add New Classroom
                </MainButton>
            </div>
            <div className='mainTable' >
                <Table />
            </div>
            <div className='buttonListClass' >
                <ButtonListClass />
            </div>
        </div>
    </>
}


export default Classroom