import MainButton from "../MainButton";
import ButtonListClass from "../ButtonListClass";
import "./style.css";
import { Routes, Route } from "react-router-dom";
// import Test from '../../test/Test';
// import AdminLayout from '../AdminLayout/AdminLayout';
import Classrooms from "../../../pages/Admin/Classrooms";
import AdminPermissionUi from "../../../pages/Admin/AdminPermissionUi";
import StudentDetails from "../../../pages/Admin/StudentDetails";
import Table from "../Table";
import Students from "../../../pages/Admin/Students";
import React from "react";
import { useContext } from "react";
import { studentDataContext } from '../../../context/Admin/StudentData';


// Creator : Team E - chanan
function Main() {
    let studentdatalocal = useContext(studentDataContext)
    // console.log("fakedata", studentdatalocal);

    return (
        <>
            <Routes>
                <Route path="/" element={<Students />} />
                <Route path="/classrooms" element={<Classrooms />} />
                <Route path="/Students" element={<Students />} />
                <Route path="/admin" element={<AdminPermissionUi />} />
                <Route path="/studentDetails" element={<StudentDetails />} />
                {/* <Route path="/test" element={<Test />} />
                <Route path="/layout" element={<AdminLayout/>} /> */}
                {/* <Route path="/login" element={< />} /> 
                  <Route path="/home" element={< />} />
             <Route path="/singUp" element={< />} />  */}
            </Routes>
        </>
    );
}

export default Main;
