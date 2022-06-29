import StudentTitle from "./Student/StudentTitle";
import ClassTitle from "./Class/ClassTitle";
import { useContext, useEffect } from "react";
import ClassRow from "./Class/ClassRow";
import "./style.css";
import StudentRow from "./Student/StudentRow";
import { listControllerContext } from "../../../context/Admin/List";
import TeacherTitle from "./Teachers/TeacherTitle";
import TeacherRow from "./Teachers/TeacherRow";
import { studentDataContext } from "../../../context/Admin/StudentData";

export default function NewTable(props) {
  let studentdatalocal = useContext(studentDataContext);
  console.log("fakedata", studentdatalocal);

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

  useEffect(() => {
    setList(props.list);
  }, []);
  console.log(list);

  return (
    <div className="table-container">
      <div className="head">
        {flagClass ? (
          <ClassTitle />
        ) : flagStudent ? (
          <StudentTitle />
        ) : flagTeacher ? (
          <TeacherTitle />
        ) : (
          ""
        )}
      </div>
      <br />
      <div className="list">
        {list.map((item) => {
          return (
            <>
              <div className="list">
                {flagClass ? (
                  <ClassRow keys={item.classroom_ID} value={item} />
                ) : flagStudent ? (
                  <StudentRow value={item} />
                ) : flagTeacher ? (
                  <TeacherRow value={item} />
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
