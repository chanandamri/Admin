import { useContext, useEffect, useState } from "react";
import { popupContext } from "../../../context/Admin/Popup";
import MainButton from "../MainButton";
import "./style.css";
import React from "react";
import Input from "../Input";

// Creator : Team E - Chanan
function EditClass(props) {
  const { popup, setPopup } = useContext(popupContext);
  const dummyvalues = ["ClassA", "ClassB", "ClassC", "ClassD"];
  const [newID, setNewID] = useState(props.classId);

  function closePopup(e) {
    e.preventDefault();
    setPopup(false);
  }
  function onSubmit(e) {
    e.preventDefault();
    const newClassName = {
      classID: newID,
      className: e.target.elements.className.value,
    };
    console.log(newClassName);
    setPopup(false);
  }
  function createnewID() {
    if (!newID) {
      setNewID("999999999");
    }
  }
  useEffect(createnewID, []);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Input legend={"Classroom name"} name="className" valid={"yes"} />
          <Input legend={"Classroom ID"} value={newID} valid={"yes"} />
        </div>
        <div className="popup-fotter">
          <MainButton color="white" onClick={closePopup}>
            Cancel
          </MainButton>
          <MainButton>Add</MainButton>
        </div>
      </form>
    </div>
  );
}
export default EditClass;
