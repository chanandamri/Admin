import './style.css';
import {useParams} from 'react-router-dom'

// Creator : Team E - Chanan
function Header(){
    const {title} = useParams()
    return <>
    <div className="admin-header">
        <div className="header-title">{title} .</div>
        <div className="header-title-routh">routh .</div>
        <div className="bell">bell .</div>
        <div className="user-logo">user .</div>
    </div>
    </>
}


export default Header