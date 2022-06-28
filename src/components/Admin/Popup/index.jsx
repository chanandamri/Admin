import { useContext, useEffect } from 'react';
import { popupContext } from '../../../context/Admin/Popup'
import './style.css'

// Creator : Team E - Chanan
function Popup() {
    const { popup, setPopup } = useContext(popupContext)

    function closePopup() {
        setPopup(false)
    }



    return <div>
        <div className='popup-outbox'>
        </div>
        <div className='popup-inbox'>
            <div className='popup-header'>
                <div className='popup-title'>
                    Popup Title
                </div>
                <div onClick={closePopup} className='popup-close'>
                    <img className='popup-button-x' src={require('./x.png')} />
                </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='popup-body'>
                <Input type="text" title="input title" />
                <Input type="dropdown" title="dropdown title" />
            </div>
            <div className='popup-fotter'>
                <form id="addclass" > 
                 {/* onSubmit={onSubmit} */}
                    <MainButton>Cancel</MainButton>
                    <MainButton form="addclass">Add</MainButton>
                </form>
            </div>


=======
            <EditClass />
>>>>>>> 270a5e5db33cb29356a25bf6d594e8027298cd82
=======
            {popup}
>>>>>>> 05c3b326007ac4ed2b19ee3302a2e5fc84f1cfcd
        </div>
        <div id="overlay"></div>
    </div >
}
export default Popup