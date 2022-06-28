<<<<<<< HEAD
import MainButton from '../MainButton'
import ButtonListClass from '../ButtonListClass'
import './style.css'
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
// import Test from '../../test/Test';
// import AdminLayout from '../AdminLayout/AdminLayout';
import Classrooms from '../../../pages/Admin/Classrooms';
import AdminPermissionUi from '../../../pages/Admin/AdminPermissionUi';
=======
import Table from '../Table'

>>>>>>> b3f132d6121204840d0890cc3d49b8525c1f92fc
// Creator : Team E - chanan
function Main() {
    return <>

<<<<<<< HEAD
        <Routes>
            <Route path="/" element={<Classrooms />} />
            <Route path="/add" element={<AdminPermissionUi />} />
            {/* <Route path="/test" element={<Test />} />
                <Route path="/layout" element={<AdminLayout/>} /> */}
            {/* <Route path="/login" element={< />} /> 
=======
        <div className='addButton' >
            <MainButton onClick={onclick=(()=> console.log("good"))} >
                Add New Classroom
            </MainButton>
        </div>

    <div className='mainTable' >
    {/* בנייה על ידי אברהם */}
    {/* <Table/> */}
    </div>

    <div className='buttonListClass' >
        {/* בנייה על ידי יוסף */}
        <ButtonListClass/>
    </div>

=======
import MainButton from "../MainButton";
import ButtonListClass from "../ButtonListClass";
import "./style.css";
import { Routes, Route } from "react-router-dom";
// import Test from '../../test/Test';
// import AdminLayout from '../AdminLayout/AdminLayout';
import Classrooms from "../../../pages/Admin/Classrooms";
import AdminLayout from "../AdminLayout";

// Creator : Team E - chanan
function Main() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Classrooms />} /> */}
        {/* {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/" element={<AdminLayout />} />
        {/* <Route path="/login" element={< />} /> 
>>>>>>> b3f132d6121204840d0890cc3d49b8525c1f92fc
                  <Route path="/home" element={< />} />
             <Route path="/singUp" element={< />} />  */}
      </Routes>
>>>>>>> 507e9fe10a051e0b7ec0ced568a0834d1dc4ef92
    </>
  );
}

export default Main;
