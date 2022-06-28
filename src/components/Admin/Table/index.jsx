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
<<<<<<< HEAD
  let flag = false;
  if (Object.keys(classList[0])[0] == "classroom_name") flag = true;
  let title = Object.keys(classList[0]);
  const [list, setList] = useState(classList);
=======
  let studentList = [
    {
      student_name: "avi",
    },
  ];

  const [list, setList] = useState(classList);
  const [nav, setNav] = useState();
  let navFlag = false;
  let flag = false;
  if (Object.keys(classList[0])[0] == "classroom_name") flag = true;

  let title = Object.keys(classList[0]);

>>>>>>> 270a5e5db33cb29356a25bf6d594e8027298cd82
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
<<<<<<< HEAD
                      <div
                        className="buttons"
                        onClick={() => {
                          alert("edit");
                        }}
                      >
                        <div>
                          {/* <img src={require("./edit-2.png")} /> */}
=======
                      <div className="buttons">
                        <div
                          onClick={() => {
                            alert("edit");
                          }}
                        >
                          <img src={require("./edit-2.png")} />
>>>>>>> 270a5e5db33cb29356a25bf6d594e8027298cd82
                        </div>
                        <div
                          className="text_row"
                          onClick={() => deleteClick(v.classroom_ID)}
                        >
                          {/* <img src={require("./trash-2.png")} /> */}
                        </div>
<<<<<<< HEAD
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
=======
                        {list ? (
                          <div
                            className="text_row"
                            onClick={() => deleteClick(i)}
                          >
                            Delete
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ) : (
                      <>
                        <div
                          onClick={() => {
                            if (nav) {
                              setNav();
                            }
                          }}
                        >
                          <img
                            className="img_3"
                            src={require("./Polygon 2.png")}
                          />
                        </div>
                      </>
                    )}
                    <div>{nav ? <div>aaa</div> : ""}</div>
                  </div>
                </div>

>>>>>>> 270a5e5db33cb29356a25bf6d594e8027298cd82
                <br />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Table;
=======
export default Table;
>>>>>>> 270a5e5db33cb29356a25bf6d594e8027298cd82
