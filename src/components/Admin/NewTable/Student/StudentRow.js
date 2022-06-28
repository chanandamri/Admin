import { useState } from "react";

export default function StudentRow(v) {
  const value = v.value;
  const [dropFlag, setDropFlag] = useState(false);
  return (
    <div>
      <div className="rows_s"></div>
      <div
        className="rows"
        onClick={() => {
          setDropFlag(!dropFlag);
        }}
      >
        <div className="text_row">{value.student_name}</div>
        <div className="text_row">{value.assessment}</div>
        <div className="text_row">{value.reading}</div>

        <div className="text_row">{value.focus}</div>

        <div
          className="buttons"
          onClick={() => {
            return <div>{value}</div>;
          }}
        >
          <img
            className={dropFlag ? "dropdownIng" : ""}
            src={require("../TablePng/Polygon 2.png")}
          />

          <br />
        </div>
      </div>
    </div>
  );
}
