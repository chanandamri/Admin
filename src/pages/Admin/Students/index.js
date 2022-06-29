import "./style.css";

import ButtonListClass from "../../../components/Admin/ButtonListClass";
import { useEffect, useContext } from "react";
import { headerText } from "../../../context/hederText";
import NewTable from "../../../components/Admin/NewTable";
import React from "react";
import { studentDataContext } from "../../../context/Admin/StudentData";
import { userContext } from "../../../context/Admin/User";
import { useNavigate } from "react-router-dom";

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
  let studentdatalocal = useContext(studentDataContext);
  const studentData = ("fakedata", studentdatalocal).studentData;
  const usersDetails = studentData.usersDetails;

  useEffect(() => {
    setHeaderText("");
  }, []);
  setHeaderText("student");

  const { user } = useContext(userContext);
  const NoPermission = useNavigate()
    useEffect(() => {
      if (!(user.permissions ==="teacher") ) return (NoPermission("/login"));
    },[])
    
  return (
    <>
      <div className="container11">
        <div className="mainTable">
          <NewTable list={usersDetails} typ={"student"} />
        </div>
        <div className="buttonListClass">
          <ButtonListClass />
        </div>
      </div>
    </>
  );
}

export default Students;
