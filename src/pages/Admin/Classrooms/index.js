import { popupContext } from "../../../context/Admin/Popup";
import "./style.css";
import MainButton from "../../../components/Admin/MainButton";
import Table from "../../../components/Admin/Table";
import ButtonListClass from "../../../components/Admin/ButtonListClass";
import { useContext } from "react";
import EditClass from "../../../components/Admin/EditClass";
import NewTable from "../../../components/Admin/NewTable";

// Creator : Team E - Chanan
function Classroom() {
  const { popup, setPopup } = useContext(popupContext);
  function onSubmit(e) {
    e.preventDefault();
    console.log("i'm changing the server");
    setPopup(false);
  }

  return (
    <>
      <div className="container11">
        <div className="addButton">
          <MainButton
            onClick={() => setPopup(<EditClass onSubmit={onSubmit} />)}
          >
            Add New Classroom
          </MainButton>
        </div>
        <div className="mainTable">
          <NewTable />
        </div>
        <div className="buttonListClass">
          <ButtonListClass />
        </div>
      </div>
    </>
  );
}

export default Classroom;
