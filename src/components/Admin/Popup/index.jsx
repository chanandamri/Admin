import { useContext, useEffect } from 'react';
import { popupContext } from '../../../context/Admin/Popup'
import './style.css'
import React from 'react';

// Creator : Team E - Chanan
function Popup() {
    const { popup, setPopup } = useContext(popupContext)
    // console.log("popup", popup);
    function closePopup() {
        setPopup(false)
    }
    return <div>
        <div id="overlay" className='active'></div>
        <div className='popup-outbox'>
        </div>
        <div className='popup-inbox'>
            <div className='popup-header'>
                <div className='popup-title'>
                    {popup.props.children}
                </div>
                <div onClick={closePopup} className='popup-close'>
                    <img className='popup-button-x' src={require('./x.png')} />
                </div>
            </div>
            {popup}
        </div>
    </div >
}
export default Popup