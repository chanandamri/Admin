import { popupContext } from '../../../context/Admin/Popup'
import { useState } from "react";
import Main from '../Main'
import Header from '../Header'
import Popup from '../Popup'
import './style.css'
// import AdminPermissionUi from '../../../pages/Admin/adminPermissionUi';

// Creator : Team E - bezalel
function AdminLayout() {
    const [popup, setPopup] = useState(false)

    return <>
        <popupContext.Provider value={{ popup, setPopup }}>
            <div>
                <Header />
            </div>

            <div>
                <Main />
            </div>

            <div className='popUp'>
                {popup && <Popup />}
            </div>
        </popupContext.Provider>

    </>
}


export default AdminLayout