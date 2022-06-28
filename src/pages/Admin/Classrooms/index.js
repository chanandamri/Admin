<<<<<<< HEAD

=======
import { popupContext } from '../../../context/Admin/Popup'
>>>>>>> 05c3b326007ac4ed2b19ee3302a2e5fc84f1cfcd
import './style.css'
import MainButton from '../../../components/Admin/MainButton'
import Table from '../../../components/Admin/Table'
import ButtonListClass from '../../../components/Admin/ButtonListClass'
<<<<<<< HEAD
=======
import { useContext } from 'react'
import EditClass from '../../../components/Admin/EditClass'
>>>>>>> 05c3b326007ac4ed2b19ee3302a2e5fc84f1cfcd



// Creator : Team E - Chanan
function Classroom() {
<<<<<<< HEAD
    return <>
        <div className='addButton' >
            <MainButton onClick={onclick = (() => console.log("good"))} >
=======
    const { popup, setPopup } = useContext(popupContext)
    function onSubmit(e) {
        e.preventDefault();
        console.log("i'm changing the server");
        setPopup(false)

    }

    return <>
        <div className='addButton' >
            <MainButton onClick={() => setPopup(<EditClass onSubmit={onSubmit} />)} >
>>>>>>> 05c3b326007ac4ed2b19ee3302a2e5fc84f1cfcd
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