import StudentTitle from "./Student/StudentTitle";
import ClassTitle from "./Class/ClassTitle";
import { useContext, useEffect, useState } from "react";
import ClassRow from "./Class/ClassRow";
import "./style.css";
import StudentRow from "./Student/StudentRow";
import { listControllerContext } from "../../../context/Admin/List";

export default function NewTable(props) {
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
  let studentList = [
    {
      student_name: "avi",
      assessment: "a",
      reading: "b",
      focus: "3",
    },
    {
      student_name: "avi",
      assessment: "a",
      reading: "b",
      focus: "3",
    },
    {
      student_name: "avi",
      assessment: "a",
      reading: "b",
      focus: "3",
    },
  ];
  const { list, setList } = useContext(listControllerContext);
  useEffect(() => {
    setList(studentList);
    console.log(list);
  }, []);
  // let list = classList;
  let flag = false;
  if (Object.keys(list[0])[0] === "classroom_name") flag = true;

  return (
    <div className="table-container">
      <div className="head">
        <div className="row_s"></div>

        {flag ? <ClassTitle /> : <StudentTitle />}
      </div>
      <br />
      <div>
        {list.map((v) => {
          return (
            <>
              <div className="list">
                <div className="rows_s"></div>
                {flag ? <ClassRow value={v} /> : <StudentRow value={v} />}
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}
