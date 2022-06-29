import "./style.css";

import ButtonListClass from "../../../components/Admin/ButtonListClass";
import { useEffect, useContext } from "react";
import { headerText } from "../../../context/hederText";
import NewTable from "../../../components/Admin/NewTable";

// Creator : Team E - Chanan
function Students() {
  const [hederText, setHeaderText] = useContext(headerText);
  let studentList = [
    {
      student_name: "avi",
      firstName: "avi",
      lastName: "baba",
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
  useEffect(() => {
    setHeaderText("");
  }, []);

  return (
    <>
      <div className="container11">
        <div className="mainTable">
          <NewTable list={studentList} typ={"student"} />
        </div>
        <div className="buttonListClass">
          <ButtonListClass />
        </div>
      </div>
    </>
  );
}

export default Students;
