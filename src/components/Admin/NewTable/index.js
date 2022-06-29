import StudentTitle from "./Student/StudentTitle";
import ClassTitle from "./Class/ClassTitle";
import { useContext, useEffect, useState } from "react";
import ClassRow from "./Class/ClassRow";
import "./style.css";
import StudentRow from "./Student/StudentRow";
import { listControllerContext } from "../../../context/Admin/List";
import React from "react";

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
  // let list = classList;
  let flag = false;
  if (Object.keys(list[0])[0] === "classroom_name") flag = true;

  const paginationOrder = () => {
   
    const pages = Math.ceil(list.length / 10);
    console.log("pages:", pages);
  }

  useEffect(() => {
    paginationOrder()

  }, [list])

  useEffect(() => {
    setList(studentList);
  }, []);

  return (
    <div className="table-container">
      <div className="head">
        <div className="row_s"></div>

        {flag ? <ClassTitle /> : <StudentTitle />}
      </div>
      <br />
      <div className="list">
        {list.map((item) => {
          return (
            <>
              <div className="item">
                <div className="rows_s"></div>
                {flag ? <ClassRow value={item} /> : <StudentRow value={item} />}
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}
