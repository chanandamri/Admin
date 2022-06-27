import"./style.css";

// Creator : Team E 

function Table() {
  let list = [
    {
      classroom_name: "class a",
      classroom_ID: "#123.456",
      student: "10",
      action:"dl"
    },
    {
      classroom_name: "class b",
      classroom_ID: "#123.789",
      student: "15",
    },
  ];

  return(
    <>
    <div className="row_s"></div>
      <div className="row">
    {Object.keys(list[0]).map((v)=>{
    
      return(<div className="text_row">{v}</div>)})}
 </div>
  
  </>
  )
  
}

export default Table;
