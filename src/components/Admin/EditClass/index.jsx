import { useContext } from 'react'
import { popupActiveContext } from '../../../context/Admin/PopupActive'
import MainButton from '../MainButton'
import './style.css'



// Creator : Team E - Chanan
function EditClass() {
    const { popupActive, setPopupActive } = useContext(popupActiveContext)
    const dummyvalues = ["ClassA", "ClassB", "ClassC", "ClassD"]

    function onSubmit(e) {
        e.preventDefault()
        console.log(e.target);
        setPopupActive(<test onApprove={() => { }} />)
    }
    return <div>
        <form id="addclass" onSubmit={onSubmit}>
            <div>
                <div className='input'>
                    <label className="inputLabel">Title</label>
                    <input className='inputButton' type="text" />
                </div>
                <label >dropdown title</label>
                <select >
                    {dummyvalues.map(v => { return (<option value={(v)} key={(v)}>{v}</option>) })}
                </select>
            </div>
            <div className='popup-fotter'>
                <MainButton value="cancel">Cancel</MainButton>
                <MainButton >Add</MainButton>
            </div>
        </form>
    </div >
}


export default EditClass