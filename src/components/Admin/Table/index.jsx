import "./style.css";

// Creator : Team E

function Table() {
  let list = [
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

  return (
    <div className="table-container">
      <div className="head">
        <div className="row_s"></div>
        <div className="row">
          {Object.keys(list[0]).map((v) => {
            return <div className="text_row">{v}</div>;
          })}
          <div className="text_row"></div>
        </div>
        <br />
      </div>

      <div>
        {list.map((v) => {
          return (
            <>
              <div className="list">
                <div className="rows_s"></div>

                <div className="rows">
                  {Object.values(v).map((vv) => {
                    return <div className="text_row">{vv}</div>;
                  })}
                  <div className="text_row">edit</div>
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
