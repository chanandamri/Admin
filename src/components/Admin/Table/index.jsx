import { useState } from "react";
import "./style.css";

// Creator : Team E

function Table() {
  let classList = [
    {
      classroom_name: "class a",
      classroom_ID: "#123.456",
      student: "10",
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
  let flag = false;
  if (Object.keys(classList[0])[0] == "classroom_name") flag = true;
  let title = Object.keys(classList[0]);
  const [list, setList] = useState(classList);
  function deleteClick(classroom_ID) {
    let newList = [];
    list.forEach((v) => {
      if (v.classroom_ID != classroom_ID) newList.push(v);
    });
    console.log(newList);
    setList(newList);
  }
  return (
    <div className="table-container">
      <div className="head">
        <div className="row_s"></div>
        <div className="row">
          {title.map((v) => {
            return <div className="text_row">{v}</div>;
          })}
          <div className="text_row">{flag ? <div> Action </div> : ""}</div>
        </div>
        <br />
      </div>

      <div className="">
        {list.map((v, i) => {
          return (
            <>
              <div className="list">
                <div className="rows_s"></div>

                <div className="rows">
                  {Object.values(v).map((value) => {
                    return <div className="text_row">{value}</div>;
                  })}
                  <div>
                    {flag ? (
                      <div
                        className="buttons"
                        onClick={() => {
                          alert("edit");
                        }}
                      >
                        <div>
                          {/* <img src={require("./edit-2.png")} /> */}
                        </div>
                        <div
                          className="text_row"
                          onClick={() => deleteClick(v.classroom_ID)}
                        >
                          {/* <img src={require("./trash-2.png")} /> */}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <img
                          className="img_3"
                          // src={require("./Polygon 2.png")}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <br />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Table;