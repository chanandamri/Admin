import MainButton from "../../../components/Admin/MainButton";
import Addteacherpopup from "../../../components/Admin/AddTeacherPopup";
import { popupContext } from "../../../context/Admin/Popup";
import { useEffect, useContext } from "react";
import { headerText } from "../../../context/hederText";
import NewTable from "../../../components/Admin/NewTable";
import ButtonListClass from "../../../components/Admin/ButtonListClass";

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

  return (
    <>
      <div className="container11">
        <div className="addButton">
          <MainButton
            onClick={() => {
              console.log("add teacher");
              setPopup(<Addteacherpopup>Add Teacher</Addteacherpopup>)
            }
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
