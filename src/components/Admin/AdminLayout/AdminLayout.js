
import Main from '../Main'
import Header from '../Header'
// import Popup from '../Popup'
import './style.css'

// Creator : Team E - bezalel
function AdminLayout() {
    return <>

        <div>
            <Header />

        </div>

        <div>
            <Main />
        </div>

        <div className='popUp'>
            {/* <Popup /> */}
        </div>


    </>
}


export default AdminLayout