import "./style.css";

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
    <path d="M9 5.36275L0.75 10.1259L0.75 0.59961L9 5.36275Z" fill="#55575A" />
  </svg>
);


function OneButtonListClass(txt) {
    
  // let numlist=23
  return (
    <div className="boo">
      <p className="backboo"></p>
      <p className="upboo">
        <p id="imagebacknext">{txt}</p>
      </p>
    </div>
  );
}

// Creator : Team E - yosef schmidt
function ButtonListClass() {
    const listbutton = ["5", "1", "2"];
  console.log(listbutton);
  let numId = 0;
  return (
    <div className="muneList">
      {/* {OneButtonListClass(nextimg,"next" )} */}
      {listbutton.map((e) => {
        return OneButtonListClass(e);
      })}
      {/* {OneButtonListClass("back",backimg )} */}
    </div>
  );
}
export default ButtonListClass;
