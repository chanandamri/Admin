import { popupContext } from "../../../context/Admin/Popup";
import { useState } from "react";
import Main from "../Main";
import Header from "../Header";
import Popup from "../Popup";
import "./style.css";
import { listControllerContext } from "../../../context/Admin/List";
import { headerText } from "../../../context/hederText";
import { userContext } from "../../../context/Admin/User";

import fakeData from "../../../context/Admin/StudentData/fakedata";
import { studentDataContext } from "../../../context/Admin/StudentData";

import React from "react";
// Creator : Team E - bezalel

function AdminLayout() {
  const [popup, setPopup] = useState(false);
  const [list, setList] = useState([{}]);
  const setHeaderText = useState("");
  const [user, setUser] = useState(false);
  const [studentData, setstudentData] = useState(fakeData);

  return (
    <>
      <popupContext.Provider value={{ popup, setPopup }}>
        <listControllerContext.Provider value={{ list, setList }}>
          <headerText.Provider value={setHeaderText}>
            <userContext.Provider value={{ user, setUser }}>
              <studentDataContext.Provider
                value={{ studentData, setstudentData }}
              >
                <div>
                  <Header />
                </div>

                <div>
                  <Main />
                </div>
                <div className="popUp">{popup && <Popup />}</div>
              </studentDataContext.Provider>
            </userContext.Provider>
          </headerText.Provider>
        </listControllerContext.Provider>
      </popupContext.Provider>
    </>
  );
}

export default AdminLayout;
