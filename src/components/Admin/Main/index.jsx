import MainButton from '../MainButton'
import ButtonListClass from '../ButtonListClass'
import './style.css'
import Table from '../Table'

// Creator : Team E - chanan
function Main() {
    return <>

        <div className='addButton' >
            <MainButton onClick={onclick=(()=> console.log("good"))} >
                Add New Classroom
            </MainButton>
        </div>

    <div className='mainTable' >
    {/* בנייה על ידי אברהם */}
    {/* <Table/> */}
    </div>

    <div className='buttonListClass' >
        {/* בנייה על ידי יוסף */}
        <ButtonListClass/>
    </div>

    </>
}


export default Main