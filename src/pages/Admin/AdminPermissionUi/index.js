import MainButton from "../../../components/Admin/MainButton";
import Addteacherpopup from "../../../components/Admin/AddTeacherPopup";
import { popupContext } from "../../../context/Admin/Popup";
import { useEffect, useContext } from "react";
import { headerText } from "../../../context/hederText";
import NewTable from "../../../components/Admin/NewTable";
import ButtonListClass from "../../../components/Admin/ButtonListClass";
import { userContext } from "../../../context/Admin/User";
import { useNavigate } from "react-router-dom";

// Creator : Team E - Ariel
export default function AdminPermissionUi() {
  const { popUp, setPopup } = useContext(popupContext);
  const [headerTxt, setHeaderText] = useContext(headerText);
  let list = [
    {
      teacherName: "avi",
    },
    {
      teacherName: "ban",
    },
  ];
  useEffect(() => {
    setHeaderText("admin");
  }, []);

  const { user } = useContext(userContext);
  const NoPermission = useNavigate()
  console.log(user);
    useEffect(() => {
      if (!(user.permissions ==="admin") ) return (NoPermission("/login"));
    },[])

  return (
    <>
      <div className="container11">
        <div className="addButton">
          <MainButton
            onClick={() =>
              setPopup(<Addteacherpopup>Add Teacher</Addteacherpopup>)
            }
          >
            Add New Teacher
          </MainButton>
        </div>
        <div className="mainTable">
          <NewTable list={list} typ={"teacher"} />
        </div>
        <div className="buttonListClass">
          <ButtonListClass />
        </div>
      </div>
    </>
  );
}
