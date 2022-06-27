import { useContext } from 'react'
import { popupActiveContext } from '../../../context/Admin/PopupActive'
import Input from '../Input'
import MainButton from '../MainButton'
import './style.css'



// Creator : Team E - Chanan
function EditClass() {
    const { popupActive, setPopupActive } = useContext(popupActiveContext)

    console.log(popupActive);
    function onSubmit(e) {
        e.preventDefault()
        console.log("hi! i'm alive!", e);
        setPopupActive(false)
        // console.log(popupActive);

    }
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