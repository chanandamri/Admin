import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../context/Admin/User";
import { headerText } from "../../../context/hederText";
import "./style.css";
// import assessment graph component
// import TF graph component
// import TR graph component

// Creator : Team E - Ariel
export default function StudentDetails() {
  const { firstName, lastName, TR, TF, assessment } = useContext();
  const allActivities = [...assessment, ...TR, ...TF];

  const [hederText, setHeaderText] = useContext(headerText);

  useEffect(() => {
    allActivities.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    setHeaderText("Student Details");
  }, []);

  const { user } = useContext(userContext);
  const NoPermission = useNavigate()
    useEffect(() => {
      if (!(user.permissions ==="teacher") ) return (NoPermission("/login"));
    },[])

  return (
    <>
      <div className="student-details-body">
        <h3 className="title">Student Name</h3>
        <h1 className="name">
          {firstName} {lastName}
        </h1>
        <div className="graphs">
          <div className="assessment">
            <h5>assessment {assessment}</h5>
            {/* <assessment graph component({assessment.graph})> */}
          </div>
          <div className="reading">
            <h5>reading {TR}</h5>
            {/* <TR graph component({TR.graph})> */}
          </div>
          <div className="focus">
            <h5>focus {TF}</h5>
            {/* <TF graph component({TF.graph})> */}
          </div>
          <hr />
          <div>
            {allActivities.map((v) => {
              return (
                <ActivityByDate
                  key={v}
                  details={v}
                  className="activityByDate"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function ActivityByDate({ details }) {
  return (
    <>
      {
        <div
          className={
            (details === "assessment" && "activityByDate-assessment") ||
            (details === "TF" && "activityByDate-TF") ||
            (details === "TR" && "activityByDate-TR")
          }
        >
          <div className="date"></div>
          <div className="activity"></div>
          <div className="result"></div>
          {details === "TR" && <div></div>}
        </div>
      }
    </>
  );
}
