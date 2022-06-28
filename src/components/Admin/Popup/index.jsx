import { useContext, useEffect } from 'react';
import { setPopupActive } from '../../../context/Admin/PopupActive'
import EditClass from '../EditClass';
import MainButton from '../MainButton'
import './style.css'

// Creator : Team A - Shahar
function Popup() {

    return <div>
        <div className='popup-outbox'>

        </div>
        <div className='popup-inbox'>
            <div className='popup-header'>
                <div className='popup-title'>
                    Popup Title
                </div>
                <div className='popup-close'>

                    <img className='popup-button-x' src={require('./x.png')} />

                </div>

            </div>
            <EditClass />
        </div>

        <div id="overlay"></div>

    </div >
}


export default Popup