
import "./style.css";
import { Routes, Route } from "react-router-dom";
import Classrooms from '../../../pages/Admin/Classrooms';
import AdminPermissionUi from '../../../pages/Admin/AdminPermissionUi';
import StudentDetails from '../../../pages/Admin/StudentDetails';
import Login from '../../../pages/Admin/Login';
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
            <Route path="/" element={< Login/>} />
            <Route path="/classrooms" element={<Classrooms />} />
            <Route path="/admin" element={<AdminPermissionUi />} />
            <Route path="/studentDetails" element={<StudentDetails />} />
            <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default Main;
