import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../context/Admin/User";
import { headerText } from "../../../context/hederText";
import "./style.css";
import React from "react";
import { studentDataContext } from "../../../context/Admin/StudentData";
// import Graph from "../../../components/Admin/GraphDashboard/Graph";

// import assessment graph component

// import TF graph component
// import TR graph component

// Creator : Team E - Ariel
export default function StudentDetails(props) {
  const { user } = useContext(userContext);
  const NoPermission = useNavigate();
  const [hederText, setHeaderText] = useContext(headerText);

  const fakeData = useContext(studentDataContext);
  // console.log( "fake", fakeData);
  const assessment = fakeData.studentData.assesmentResults; //sort
  const student = fakeData.studentData.usersDetails[0];
  const TRAnswers = fakeData.studentData.trainReading[0];

  //   const { firstName, lastName, TR, TF, assessment } = props;
  const allActivities = [...assessment, ...student.TR, ...student.TF];
  console.log(allActivities);
  {
    /* <div className="text_row">{value.TF[value.TF.length - 1].Value}</div> */
  }

  useEffect(() => {
    console.log("asses", TRAnswers);
    //   if (!(user.permissions === "teacher")) return (NoPermission("/login"));
    setHeaderText("Student Details");
    const sort = allActivities.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    console.log("sort", sort);
  }, []);

  return (
    <div className="aout">
      <img className="imgraf" src={require("./graf.png")} />
    </div>
  );
}

function ActivityByDate({ details }) {
  return (
    <>
      {
        <div
          className={
            "activityByDate"
            // (details === "assessment" &&
            //     "activityByDate::assessment") ||
            // (details === "TF" && "activityByDate::activityByDate-TF") ||
            // (details === "TR" && "activityByDate::activityByDate-TR")
          }
        >
          <div className="date">4/4/4</div>
          <div className="activity">tf</div>
          <div className="result">55</div>
          {details === "TR" && <div></div>}
        </div>
      }
    </>
  );
}
