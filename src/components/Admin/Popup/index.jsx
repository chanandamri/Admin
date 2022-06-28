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
            {popup}
        </div>
        <div id="overlay"></div>
    </div >
}
export default Popup