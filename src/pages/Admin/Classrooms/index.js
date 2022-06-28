import { popupContext } from '../../../context/Admin/Popup'
import './style.css'
import MainButton from '../../../components/Admin/MainButton'
import Table from '../../../components/Admin/Table'
import ButtonListClass from '../../../components/Admin/ButtonListClass'
import { useContext } from 'react'
import EditClass from '../../../components/Admin/EditClass'



// Creator : Team E - Chanan
function Classroom() {
    const { popup, setPopup } = useContext(popupContext)

    return <>
        <div className='addButton' >
            <MainButton onClick={onclick = (() => setPopup(<EditClass />))} >
                Add New Classroom
            </MainButton>
        </div>
        <div className='mainTable' >
            <Table />
        </div>
        <div className='buttonListClass' >
            <ButtonListClass />
        </div>

    </>
}


export default Classroom