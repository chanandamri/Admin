import { useContext, useState } from "react";
import { listControllerContext } from "../../../../context/Admin/List";
import { popupContext } from "../../../../context/Admin/Popup";
import EditClass from "../../EditClass";
import MainButton from "../../MainButton";

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
  function deleteClick(teacherName) {
    let newList = [];
    list.forEach((v) => {
      if (v.teacherName != teacherName) newList.push(v);
    });
    console.log(newList);
    if (newList.length) {
      setList(newList);
    } else {
      setList([
        {
          teacherName: "",
        },
      ]);
    }
  }
  // console.log(list);

  return (
    <>
      {value.teacherName ? (
        <div className={"rowBox"}>
          <div className="rows">
            <div className="text_row">{value.teacherName}</div>

            <div className="buttons">
              <div
                onClick={() => {
                  setPopup(
                    <EditClass onSubmit={onSubmit} classId={value.teacherName}>
                      Edit teacher
                    </EditClass>
                  );
                }}
              >
                <img src={require("../TablePng/edit-2.png")} />
              </div>
              <div
                className="text_row"
                onClick={() => {
                  deleteClick(value.teacherName);
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
