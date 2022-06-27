import { popupActiveContext } from '../../../context/Admin/PopupActive'
import { useState } from "react";
import Main from '../Main'
import Header from '../Header'
import Popup from '../Popup'
import './style.css'

// Creator : Team E - bezalel
function AdminLayout() {
    const [popupActive, setPopupActive] = useState(true)

    return <>
        <popupActiveContext.Provider value={{ popupActive, setPopupActive }}>
            <div>
                <Header />
            </div>

            <div>
                <Main />
            </div>

            <div className='popUp'>
                {popupActive && <Popup />}
            </div>
        </popupActiveContext.Provider>

    </>
}


export default AdminLayout