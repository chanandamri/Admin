import { useContext, useState } from "react";
import { listControllerContext } from "../../../../context/Admin/List";
import EditClass from "../../EditClass";
import MainButton from "../../MainButton";

export default function ClassRow(v) {
  const value = v.value;
  const [popup, setPopup] = useState(true);
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
                  <MainButton
                    onClick={() =>
                      setPopup(<EditClass onSubmit={""}>Add class</EditClass>)
                    }
                  >
                    Add New Classroom
                  </MainButton>;
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
