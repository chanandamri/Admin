import Table from "../Admin/Table";

function Test() {
  let list = {
    classroom_name: "class a",
    classroom_ID: "#123.456",
    student: "10",
  };
  return (
    <div>
      <Table list={list} />
    </div>
  );
}

export default Test;
