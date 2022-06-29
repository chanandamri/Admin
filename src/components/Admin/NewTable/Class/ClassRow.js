import { useContext, useState } from "react";
import { listControllerContext } from "../../../../context/Admin/List";
import { popupContext } from "../../../../context/Admin/Popup";
import EditClass from "../../EditClass";
import MainButton from "../../MainButton";
import React from "react";

export default function ClassRow(v) {
  ///////
  function onSubmit(e) {
    e.preventDefault();
    console.log("i'm changing the server");
    setPopup(false);
  }
  ////

  const value = v.value;
  const { popup, setPopup } = useContext(popupContext);
  const { list, setList } = useContext(listControllerContext);
  function deleteClick(classroom_ID) {
    let newList = [];
    list.forEach((v) => {
      if (v.classroom_ID != classroom_ID) newList.push(v);
    });
    console.log(newList);
    if (newList.length) {
      setList(newList);
    } else {
      setList([
        {
          classroom_name: "",
          classroom_ID: "",
          student: "",
        },
      ]);
    }
  }
  // console.log(list);

  return (
    <>
      {value.classroom_name ? (
        <div className={"rowBox"}>
          <div className="rows">
            <div className="text_row">{value.classroom_name}</div>
            <div className="text_row">{value.classroom_ID}</div>
            <div className="text_row">{value.student}</div>
            <div className="buttons">
              <div
                onClick={() => {
                  setPopup(
                    <EditClass onSubmit={onSubmit} classId={value.classroom_ID}>
                      Edit class
                    </EditClass>
                  );
                }}
              >
                <img src={require("../TablePng/edit-2.png")} />
              </div>
              <div
                className="text_row"
                onClick={() => {
                  deleteClick(value.classroom_ID);
                }}
              >
                <img src={require("../TablePng/trash-2.png")} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
