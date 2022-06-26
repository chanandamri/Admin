import"./style.css";

// Creator : Team E - avraham

function Table(props) {
  let list = props.list;
  return (

    <div className={"row"}>
      <div>{list.classroom_name}</div>
      <div>{list.classroom_ID}</div>
      <div>{list.student}</div>
    </div>
  );
}

export default Table;
