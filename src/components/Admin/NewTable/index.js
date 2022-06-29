import StudentTitle from "./Student/StudentTitle";
import ClassTitle from "./Class/ClassTitle";
import { useContext, useEffect } from "react";
import ClassRow from "./Class/ClassRow";
import "./style.css";
import StudentRow from "./Student/StudentRow";
import { listControllerContext } from "../../../context/Admin/List";
import React from "react";

export default function NewTable(props) {
  const { list, setList } = useContext(listControllerContext);
  const flags = props.typ;
  let flagClass = false,
    flagStudent = false,
    flagTeacher = false;
  if (flags === "class") {
    flagClass = true;
  } else if (flags === "student") {
    flagStudent = true;
  } else {
    flagTeacher = true;
  }
  // let flag = false;

  useEffect(() => {
    // console.log("dd",props.list);
    // setList(props.list);
  }, []);

  return (
    <div className="table-container">
      <div className="head">
        {flagClass ? (
          <ClassTitle />
        ) : flagStudent ? (
          <StudentTitle />
        ) : flagTeacher ? (
          ""
        ) : (
          ""
        )}
      </div>
      <br />
      <div className="list">
        {/* {list.filter((v, i) => (i > props.pageActive-2 && i < 5 )).map((item) => { */}

        {list.slice(props.pageActive * 4, props.pageActive * 4 + 4).map((item) => {
          return (
            <>

              <div key={item.ClassRow} className="list">
                {flagClass ? (
                  <ClassRow key={item.classroom_ID} value={item} />
                ) : flagStudent ? (
                  <StudentRow key={item.ClassRow} value={item} />
                ) : flagTeacher ? (
                  ""
                ) : (
                  ""
                )}
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}
