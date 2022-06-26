import Table from "../Admin/Table";

function Test() {
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
  ];
  return (
    <div>
      <Table list={list} />
    </div>
  );
}

export default Test;
