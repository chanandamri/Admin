import { popupContext } from "../../../context/Admin/Popup";
import { useState } from "react";
import Main from "../Main";
import Header from "../Header";
import Popup from "../Popup";
import "./style.css";
import NewTable from "../NewTable";
import { listControllerContext } from "../../../context/Admin/List";
import { headerText } from "../../../context/hederText";
// Creator : Team E - bezalel
function AdminLayout() {
  const [popup, setPopup] = useState(true);
  const [list, setList] = useState([{}]);
  const setHeaderText =useState('')

  return (
    <>
      <popupContext.Provider value={{ popup, setPopup }}>
        <listControllerContext.Provider value={{ list, setList }}>
            <headerText.Provider value={setHeaderText}>

          <div>
            <Header />
          </div>

          <div>
            <Main />
          </div>
            </headerText.Provider>
          {/* <div>
            <NewTable />
          </div> */}

          <div className="popUp">{popup && <Popup />}</div>
        </listControllerContext.Provider>
      </popupContext.Provider>
    </>
  );
}

export default AdminLayout;
