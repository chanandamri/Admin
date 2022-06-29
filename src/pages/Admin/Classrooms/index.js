import { popupContext } from "../../../context/Admin/Popup";
import "./style.css";
import MainButton from "../../../components/Admin/MainButton";
import Table from "../../../components/Admin/Table";
import ButtonListClass from "../../../components/Admin/ButtonListClass";
import { useEffect, useContext } from "react";
import EditClass from "../../../components/Admin/EditClass";
import { headerText } from "../../../context/hederText";
import NewTable from "../../../components/Admin/NewTable";

// Creator : Team E - Chanan
function Classroom() {
  const [hederText, setHeaderText] = useContext(headerText);
  let classList = [
    {
      classroom_name: "class a",
      classroom_ID: "#123.456",
      student: "10",
      bla: "bla",
    },
    {
      classroom_name: "class b",
      classroom_ID: "#123.789",
      student: "15",
    },
    {
      classroom_name: "class c",
      classroom_ID: "#789.789",
      student: "30",
    },
    {
      classroom_name: "class d",
      classroom_ID: "#789.1223",
      student: "35",
    },
  ];
  useEffect(() => {
    setHeaderText("");
  }, []);

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
            onClick={() =>
              setPopup(<EditClass onSubmit={onSubmit}>Add class</EditClass>)
            }
          >
            Add New Classroom
          </MainButton>
        </div>
        <div className="mainTable">
          <NewTable list={classList} typ={"class"} />
        </div>
        <div className="buttonListClass">
          <ButtonListClass />
        </div>
      </div>
    </>
  );
}

export default Classroom;
