import { popupContext } from "../../../context/Admin/Popup";
import { useState } from "react";
import Main from "../Main";
import Header from "../Header";
import Popup from "../Popup";
import "./style.css";
import NewTable from "../NewTable";
import { listControllerContext } from "../../../context/Admin/List";
// Creator : Team E - bezalel
function AdminLayout() {
  const [popup, setPopup] = useState(true);
  const [list, setList] = useState([{}]);

  return (
    <>
      <popupContext.Provider value={{ popup, setPopup }}>
        <listControllerContext.Provider value={{ list, setList }}>
          <div>
            <Header />
          </div>

          <div>
            <Main />
          </div>
          <div>
            <NewTable />
          </div>

          <div className="popUp">{popup && <Popup />}</div>
        </listControllerContext.Provider>
      </popupContext.Provider>
    </>
  );
}

export default AdminLayout;
