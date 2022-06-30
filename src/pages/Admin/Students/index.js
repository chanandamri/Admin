import "./style.css";

import ButtonListClass from "../../../components/Admin/ButtonListClass";
import { useEffect, useContext, useState } from "react";
import { headerText } from "../../../context/hederText";
import NewTable from "../../../components/Admin/NewTable";
import React from "react";
import { studentDataContext } from "../../../context/Admin/StudentData";
import { userContext } from "../../../context/Admin/User";
import { useNavigate } from "react-router-dom";

// Creator : Team E - Chanan
function Students() {
  const [hederText, setHeaderText] = useContext(headerText);
  let [pageActive, setPageActive] = useState(1);
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
  console.log(studentData);
  useEffect(() => {
    setHeaderText("");
  }, []);
  setHeaderText("student");

  const { user } = useContext(userContext);
  const NoPermission = useNavigate();
  useEffect(() => {
    // if (!(user.permissions ==="teacher") ) return (NoPermission("/login"));
  }, []);

  return (
    <>
      <div className="container11">
        <div className="mainTable">
          <NewTable
            list={usersDetails}
            typ={"student"}
            pageActive={pageActive - 1}
          />
        </div>
        <div className="buttonListClass">
          <ButtonListClass
            pages1={Math.ceil(usersDetails.length / 3)}
            setPageActive={setPageActive}
            pageActive={pageActive}
          />
        </div>
      </div>
    </>
  );
}

export default Students;
