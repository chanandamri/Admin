import MainButton from "../../../components/Admin/MainButton"
import Addteacherpopup from "../../../components/Admin/AddTeacherPopup"
import { popupContext } from "../../../context/Admin/Popup"
import { useContext } from "react"

export default function AdminPermissionUi(){
    const {popUp, setPopup} = useContext(popupContext);
    return(
        <>
        
            <MainButton onClick={() => setPopup(<Addteacherpopup />)} >
            Add New Teacher
            </MainButton>
        </>
    )
}