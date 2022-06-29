import { useContext } from 'react'
import { popupContext } from '../../../context/Admin/Popup'
import MainButton from '../MainButton'
import './style.css'
import React from 'react'



// Creator : Team E - Chanan
function EditClass(props) {
    const { popup, setPopup } = useContext(popupContext)
    const dummyvalues = ["ClassA", "ClassB", "ClassC", "ClassD"]

    function closePopup(e) {
        e.preventDefault()
        setPopup(false)
    }
    function onSubmit(e) {
        e.preventDefault()

        const newClassName = e.target.elements.className.value
        console.log(newClassName);
    }
    return <div>
        <form onSubmit={onSubmit}>
        // {props.onSubmit}>
            {/* <form id="addclass" onSubmit={onSubmit}> */}
            <div>
                {/* <div>
                    <label>
                        classroom name:
                        <input name="className" required type="text" className='inputButton' />
                    </label>
                </div> */}

                <div className='input'>
                    <label className="inputLabel">Title</label>
                    <input name='className' className='inputButton' type="text" />
                </div>
                <label >dropdown title</label>
                <select >
                    {dummyvalues.map(v => { return (<option value={(v)} key={(v)}>{v}</option>) })}
                </select>
            </div>
            <div className='popup-fotter'>
                <MainButton onClick={closePopup}>Cancel</MainButton>
                <MainButton >Add</MainButton>
            </div>
        </form>
    </div >
}


export default EditClass