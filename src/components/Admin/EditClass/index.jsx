import Input from '../Input'
import MainButton from '../MainButton'
import './style.css'
function onSubmit(e) {
    e.preventDefault()
    console.log("hi! i'm alive!", e);
}

// Creator : Team E - Chanan
function EditClass() {
    return <div>
        <form id="addclass" onSubmit={onSubmit}>
            <div>
                <Input type="text" title="input title" />
                <Input type="dropdown" title="dropdown title" />
            </div>
            <div className='popup-fotter'>
                <MainButton>Cancel</MainButton>
                <MainButton form="addclass">Add</MainButton>
            </div>
        </form>
    </div >
}


export default EditClass