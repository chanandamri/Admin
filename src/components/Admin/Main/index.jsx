
import MainButton from '../MainButton'
import ButtonListClass from '../ButtonListClass'
import './style.css'
import { Routes, Route } from "react-router-dom";
// import Test from '../../test/Test';
// import AdminLayout from '../AdminLayout/AdminLayout';
import Classrooms from '../../../pages/Admin/Classrooms';
import AdminPermissionUi from '../../../pages/Admin/AdminPermissionUi';
import StudentDetails from '../../../pages/Admin/StudentDetails';
import Table from '../Table'
import Login from '../../../pages/Admin/Login';


// Creator : Team E - chanan
function Main() {
    return <>

        <Routes>
            <Route path="/" element={< Login/>} />
            <Route path="/classrooms" element={<Classrooms />} />
            <Route path="/admin" element={<AdminPermissionUi />} />
            <Route path="/studentDetails" element={<StudentDetails />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/test" element={<Test />} />
                <Route path="/layout" element={<AdminLayout/>} /> */}
            {/* <Route path="/login" element={< />} /> 
                  <Route path="/home" element={< />} />
             <Route path="/singUp" element={< />} />  */}
        </Routes>

    </>

}

export default Main;
