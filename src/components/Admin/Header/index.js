import * as React from "react"
import "./style.css";
import { Link, useParams } from "react-router-dom";

// Creator : Team E - Chanan: Chagay & Ariel
function Header() {
    const {classId} = useParams();
    return (
        <>
            <div className="admin-header">
                <img className="logo1" src={require("./logo1.png")} alt="logo1" />
                <img className="logo2" src={require("./logo2.png")} alt="logo2" />
                <Link className="header-title" to="/classrooms">
                    Classrooms
                </Link>
                <div className="header-title-route">{classId}</div>
                <img className="user-logo" src={require("./user-logo.png")} />
            </div>
        </>
    );
}

export default Header;
