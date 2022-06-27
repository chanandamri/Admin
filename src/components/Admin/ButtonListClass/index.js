import "./style.css";
 const arrey = [];
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

function OneButtonListClass(txt,id,isactive) {
  return (
    <div className="box" id={id}>
      <div className="backbox">
        <div className={"upbox "+((txt==isactive) ? "active" :"")}>
          <div id="imagebacknext">{txt}</div>
        </div>
      </div>
    </div>
  );
}


 const creatList=(arr)=> {
  const listbutton = [];
 let num=1
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];// temporary array for training
  if (arr.length > 8) {
    for (let i = arr.length; i >= 0; i -= 8) {
       listbutton.push(num++);
    }
  console.log(listbutton+arr);}
  return listbutton
}

// Creator : Team E - yosef schmidt
function ButtonListClass(arrey) {
  let isactive=1// צריך לשלוף מפאראם או מלפי איך שמחליטים מה להציג על המסך ולשים כאן
 let listbutton=creatList(arrey)
  return (
    <div className="muneList">
      {OneButtonListClass(backimg,"backinlist")}
      {listbutton.map((e) => {
        return OneButtonListClass(e,e,isactive);
      })}
      {OneButtonListClass(nextimg,"nextinlist")}
    </div>
  );
}
export default ButtonListClass;
