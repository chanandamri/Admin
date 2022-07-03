import MainButton from "../../../components/Admin/MainButton";
import Addteacherpopup from "../../../components/Admin/AddTeacherPopup";
import { popupContext } from "../../../context/Admin/Popup";
import { useEffect, useContext, useState } from "react";
import { headerText } from "../../../context/hederText";
import NewTable from "../../../components/Admin/NewTable";
import ButtonListClass from "../../../components/Admin/ButtonListClass";
import { userContext } from "../../../context/Admin/User";
import { useNavigate } from "react-router-dom";
import React from "react";

// Creator : Team E - Ariel
export default function AdminPermissionUi() {
  const { popUp, setPopup } = useContext(popupContext);
  const [headerTxt, setHeaderText] = useContext(headerText);
  let [pageActive, setPageActive] = useState(1);
  let list = [
    {
      teacherName: "avi1",
    },
    {
      teacherName: "ban2",
    },
    {
      teacherName: "can",
    },
    {
      teacherName: "dan",
    },
    {
      teacherName: "ean",
    },
    {
      teacherName: "fan",
    },
    {
      teacherName: "gan",
    },
  ];
  useEffect(() => {
    setHeaderText("admin");
  }, []);

  const { user } = useContext(userContext);
  const NoPermission = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!(user.permissions === "admin")) return NoPermission("/login");
  }, []);

  return (
    <div>
      <div className="addButton">
        <MainButton
          onClick={() => {
            console.log("add teacher");
            setPopup(<Addteacherpopup>Add Teacher</Addteacherpopup>);
          }}
        >
          Add New Teacher
        </MainButton>
        <div className="mainTable">
          <NewTable list={list} typ={"teacher"} pageActive={pageActive - 1} />
        </div>
        <div className="buttonListClass">
          <ButtonListClass
            pages1={Math.ceil(list.length / 3) - 1}
            setPageActive={setPageActive}
            pageActive={pageActive}
          />
        </div>
      </div>
    </div>
  );
}
