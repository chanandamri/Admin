import EditClass from '../EditClass';
import Input from '../Input'
import MainButton from '../MainButton'
import './style.css'
function onSubmit(e) {
    e.preventDefault()
    console.log("hi! i'm alive!", e);
}

// Creator : Team E - Chanan
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
            <div className='popup-body'>
                <EditClass />
            </div>


        </div>
        <div id="overlay"></div>

    </div >
}


export default Popup