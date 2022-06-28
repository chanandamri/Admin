export default function StudentRow(v) {
  const value = v.value;

  return (
    <div className="rows">
      <div className="text_row">{value.student_name}</div>
      <div className="text_row">{value.assessment}</div>
      <div className="text_row">{value.reading}</div>
      <div className="text_row">{value.focus}</div>
      <div
        className="buttons"
        onClick={() => {
          return <div>{value}</div>;
        }}
      >
        <img src={require("../TablePng/Polygon 2.png")} />
        {"  "}
      </div>
    </div>
  );
}
