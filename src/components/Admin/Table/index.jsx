import"./style.css";

// Creator : Team E 

function Table(props) {
  let list = props.list;
  for(let i=0;i<2;i++){
  return (
<div className="row_s">
    <div className={"row"}>
      <div className="text_row">{list[i].classroom_name}</div>
      <div className="text_row">{list[i].classroom_ID}</div>
      <div className="text_row">{list[i].student}</div>
      <div className="text_row">edit  delt</div>
     
    </div></div>
  );
}}

export default Table;
