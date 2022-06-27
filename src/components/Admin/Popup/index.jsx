import Input from '../Input'
import MainButton from '../MainButton'
import './style.css'
function onSubmit(e) {
    e.preventDefault()
    console.log("hi! i'm alive!", e);
}

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
            <div className='popup-body'>
                <Input type="text" title="input title" />
                <Input type="dropdown" title="dropdown title" />
            </div>
            <div className='popup-fotter'>
                <form id="addclass" onSubmit={onSubmit}>
                    <MainButton>Cancel</MainButton>
                    <MainButton form="addclass">Add</MainButton>
                </form>
            </div>


        </div>
        <div id="overlay"></div>

    </div >
}


export default Popup