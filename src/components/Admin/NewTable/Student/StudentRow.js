import { useState } from "react";
import RowExtension from "../../RowExtension";

export default function StudentRow(v) {
  const value = v.value;
  const ln = v.ln;

  console.log(value);
  const [dropFlag, setDropFlag] = useState(false);
  // const leng=(value.TF.length - 1)
  return (
    <div className="rowBox">
      <div
        className="rows"
        onClick={() => {
          setDropFlag(!dropFlag);
        }}
      >
        <div className="text_row">{value.firstName + " " + value.lastName}</div>
        <div></div>
        <div></div>
        {/* <div className="text_row">{value.TF[value.TF.length - 1].Value}</div> */}

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
        </div>
      </div>
      <div>{dropFlag ? <div>{<RowExtension />}</div> : ""}</div>
    </div>
  );
}
