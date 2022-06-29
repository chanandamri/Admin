import "./style.css";
import React, { useState } from "react";
const arrey = [];
// const { pagetion, setPagetion } = useState(0);
let nextimg = (
  <svg
    width="9"
    height="11"
    viewBox="0 0 9 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 5.36275L0.75 10.1259L0.75 0.59961L9 5.36275Z" fill="#55575A" />
  </svg>
);
let backimg = (
  <svg
    width="9"
    height="11"
    viewBox="0 0 9 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-2.08203e-07 5.63725L8.25 0.874111L8.25 10.4004L-2.08203e-07 5.63725Z"
      fill="#55575A"
    />
  </svg>
);






const creatList = (pages) => {
  let listbutton = [];

  for (let i = 0; i < pages; i++) {
    listbutton[i] = i + 1
  }

  return listbutton
}

// Creator : Team E - yosef schmidt
function ButtonListClass(props) {
  let [pageActive, setPageActive] = useState(1)


  // function OneButtonListClass(txt, id, isactive) {
  //   return (
  //     <div className="box" id={id}>
  //       <div className="backbox">
  //         <div className={"upbox " + ((txt == isactive) ? "active" : "")}>
  //           <div id="imagebacknext">{txt}</div>

  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  let listbutton = creatList(8)
  return (

    <div className="muneList" >

<div key={1} onClick={(e) => { setPageActive(pageActive-1); console.log(e.target.outerText); }} className="box" id={"nextlist"} >
        <div className="backbox">
          <div className={"upbox " + ((backimg == 0) ? "active" : "")}>
            <div id="imagebacknext">{backimg}</div>
          </div>
        </div>
      </div>

      {listbutton.map((v) => {

        return (
          <div >
            <div key={v} onClick={(e) => { setPageActive(e.target.outerText); console.log(e.target.outerText); }} className="box" id={v.id} >
              <div className="backbox">
                <div className={"upbox " + ((v == pageActive) ? "active" : "")}>
                  <div id="imagebacknext">{v}</div>
                </div>
              </div>
            </div>
          </div>
        )
      })}




<div key={1} onClick={(e) => { setPageActive(pageActive+1); console.log(e.target.outerText); }} className="box" id={"backinlist"} >
      
        <div className="backbox">
          <div className={"upbox " + ((nextimg == 0) ? "active" : "")}>
            <div id="imagebacknext">{nextimg}</div>
          </div>
        </div>
      </div>




    </div>
  );
}
export default ButtonListClass;
