import { popupActiveContext } from '../../../context/Admin/PopupActive'
import './style.css'
import MainButton from '../../../components/Admin/MainButton'
import Table from '../../../components/Admin/Table'
import ButtonListClass from '../../../components/Admin/ButtonListClass'
import { useContext } from 'react'



// Creator : Team E - Chanan
function Classroom() {
    const { popupActive, setPopupActive } = useContext(popupActiveContext)

    return <>
        <div className='addButton' >
            <MainButton onClick={onclick = (() => setPopupActive(true))} >
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