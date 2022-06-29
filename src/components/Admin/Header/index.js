import * as React from "react"
import "./style.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { headerText } from "../../../context/hederText";
import { useContext } from "react";

// Creator : Team E - Ariel
function Header() {
    const [currentPage, setHeaderText] = useContext(headerText);
    // const {classId} = useParams();
    // console.log(classId);
    // const [currentRoute, setCurrentRoute] = useSearchParams()

    return (
        <>
            <div className="admin-header">
                <Link className="link1" to="/">
                    <img className="logo1" src={require("./logo1.png")} alt="logo1" />
                </Link>
                <Link className="link2" to="/">
                    <img className="logo2" src={require("./logo2.png")} alt="logo2" />
                </Link>

                <PageName page={currentPage} />

                <img className="user-logo" src={require("./user-logo.png")} />
            </div>
        </>
    );
}

function PageName({ page }) {
   
    if (page==="admin") return <div className="header-title">Admin-Portal</div>;

    else return(
        <>
            <Link className={page ? "header-title-gray" : "header-title"} to="/classrooms">
                Classrooms
            </Link>

            {page ?  
                <div className="header-title">
                    <span className="header-title-gray">/ </span>
                    {page}
                </div>
                : ""
            }
        </>
    )
}

export default Header;
