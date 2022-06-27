
import './style.css'
import MainButton from '../../../components/Admin/MainButton'
import Table from '../../../components/Admin/Table'
import ButtonListClass from '../../../components/Admin/ButtonListClass'



// Creator : Team E - Chanan
function Classroom() {
    return <>
        <div className='addButton' >
            <MainButton onClick={onclick = (() => console.log("good"))} >
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