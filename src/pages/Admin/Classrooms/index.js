import { popupContext } from "../../../context/Admin/Popup";
import "./style.css";
import MainButton from "../../../components/Admin/MainButton";
import ButtonListClass from "../../../components/Admin/ButtonListClass";
import { useEffect, useContext, useState } from "react";
import EditClass from "../../../components/Admin/EditClass";
import { headerText } from "../../../context/hederText";
import { userContext } from "../../../context/Admin/User";
import React from "react";
import NewTable from "../../../components/Admin/NewTable";

//Creator : Team E - Chanan
function Classroom() {
  const [hederText, setHeaderText] = useContext(headerText);
  const [classList, setClassList] = useState([]);

  let classLis = [
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
    setClassList(classLis);
  }, []);

  const { user } = useContext(userContext);
  // console.log("classroom", user);

  const { popup, setPopup } = useContext(popupContext);
  function onSubmit(e) {
    e.preventDefault();
    console.log("i'm changing the server");
    setPopup(false);
  }
  // if (!user) return (<div>no user</div>)
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
      </div>
      <div className="mainTable">
        <NewTable list={classList} typ={"class"} />
      </div>
      <div className="buttonListClass">
        <ButtonListClass pages1="8" />
      </div>
    </>
  );
}

export default Classroom;
