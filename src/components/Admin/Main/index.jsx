
import { Routes, Route } from "react-router-dom";
// import Test from '../../test/Test';
// import AdminLayout from '../AdminLayout/AdminLayout';
import Classrooms from '../../../pages/Admin/Classrooms';
import AdminPermissionUi from '../../../pages/Admin/AdminPermissionUi';
import Table from '../Table'


// Creator : Team E - chanan
function Main() {
    return <>

        <Routes>
            <Route path="/" element={<Classrooms />} />
            <Route path="/add" element={<AdminPermissionUi />} />
            {/* <Route path="/test" element={<Test />} />
                <Route path="/layout" element={<AdminLayout/>} /> */}
            {/* <Route path="/login" element={< />} /> 
                  <Route path="/home" element={< />} />
             <Route path="/singUp" element={< />} />  */}
      </Routes>

    </>
  
}

export default Main;
