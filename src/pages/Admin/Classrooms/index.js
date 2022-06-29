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
import { useNavigate } from "react-router-dom";

//Creator : Team E - Chanan
function Classroom() {
  const [hederText, setHeaderText] = useContext(headerText);
  const [classList, setClassList] = useState([]);

  let classLis = [
    {
      classroom_name: "class a",
      classroom_ID: "#123.1",
      student: "10",
      bla: "bla",
    },
    {
      classroom_name: "class b",
      classroom_ID: "#123.2",
      student: "15",
    },
    {
      classroom_name: "class c",
      classroom_ID: "#123.4",
      student: "30",
    },
    {
      classroom_name: "class d",
      classroom_ID: "#123.5",
      student: "35",
    },
    {
      classroom_name: "class a",
      classroom_ID: "#123.6",
      student: "10",
      bla: "bla",
    },
    {
      classroom_name: "class b",
      classroom_ID: "#123.7",
      student: "15",
    },
    {
      classroom_name: "class c",
      classroom_ID: "#123.8",
      student: "30",
    },
    {
      classroom_name: "class d",
      classroom_ID: "#123.9",
      student: "35",
    },
    {
      classroom_name: "class a",
      classroom_ID: "#123.10",
      student: "10",
      bla: "bla",
    },
    {
      classroom_name: "class b",
      classroom_ID: "#123.11",
      student: "15",
    },
    {
      classroom_name: "class c",
      classroom_ID: "#123.12",
      student: "30",
    },
    {
      classroom_name: "class d",
      classroom_ID: "#123.13",
      student: "35",
    },
    {
      classroom_name: "class c",
      classroom_ID: "#123.14",
      student: "30",
    },
    {
      classroom_name: "class d",
      classroom_ID: "#123.15",
      student: "35",
    },
  ];
  useEffect(() => {
    setHeaderText("");
    setClassList(classLis);
  }, []);

  const { user } = useContext(userContext);
  const NoPermission = useNavigate();
  useEffect(() => {
    if (!(user.permissions === "teacher")) return NoPermission("/login");
  }, []);

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
