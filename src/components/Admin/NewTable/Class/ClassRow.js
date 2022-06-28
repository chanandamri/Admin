import { useContext } from "react";
import { listControllerContext } from "../../../../context/Admin/List";

export default function ClassRow(v) {
  const value = v.value;
  const { list, setList } = useContext(listControllerContext);
  function deleteClick(classroom_ID) {
    let newList = [];
    list.forEach((v) => {
      if (v.classroom_ID != classroom_ID) newList.push(v);
    });
    console.log(newList);
    setList(newList);
  }
  // console.log(list);

  return (
    <div className="rows">
      <div className="text_row">{value.classroom_name}</div>
      <div className="text_row">{value.classroom_ID}</div>
      <div className="text_row">{value.student}</div>
      <div className="buttons">
        <div
          onClick={() => {
            alert("edit");
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
  );
}
