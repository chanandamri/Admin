import { popupActiveContext } from "../../../context/Admin/PopupActive";
import { useState } from "react";
import Main from "../Main";
import Header from "../Header";
import Popup from "../Popup";
import "./style.css";
import NewTable from "../NewTable";
import listControllerContext from "../../context/Admin/List";
// Creator : Team E - bezalel
function AdminLayout() {
  const [popupActive, setPopupActive] = useState(true);
  const [list, setList] = useState();

  return (
    <>
      <popupActiveContext.Provider value={{ popupActive, setPopupActive }}>
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

          <div className="popUp">{popupActive && <Popup />}</div>
        </listControllerContext.Provider>
      </popupActiveContext.Provider>
    </>
  );
}

export default AdminLayout;
