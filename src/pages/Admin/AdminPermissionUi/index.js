import MainButton from "../../../components/Admin/MainButton"
import Addteacherpopup from "../../../components/Admin/AddTeacherPopup"
import { popupContext } from "../../../context/Admin/Popup"
import { useEffect, useContext } from "react"
import { headerText } from "../../../context/hederText"

// Creator : Team E - Ariel
export default function AdminPermissionUi(){
    const {popUp, setPopup} = useContext(popupContext);
    const [headerTxt, setHeaderText] = useContext(headerText);
    
    useEffect(()=>{
        setHeaderText("admin")
    },[])

    return(
        <>
        
            <MainButton onClick={() => setPopup(<Addteacherpopup>Add Teacher</Addteacherpopup>)} >
            Add New Teacher
            </MainButton>
        </>
    )
}