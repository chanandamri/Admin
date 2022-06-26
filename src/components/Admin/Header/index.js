import "./style.css";
import { Link, useParams } from "react-router-dom";

// Creator : Team E - Chanan
function Header() {
    const title = useParams();
    return (
        <>
            <div className="admin-header">
                <img id="logo1" src={require("./logo1.png")} alt="logo1" />
                <img id="logo2" src={require("./logo2.png")} alt="logo2" />
                <Link className="header-title" to="/classrooms">
                    Classrooms
                </Link>
                {/* <div>{title}</div> */}
                <img id="user-logo" src={require("./user-logo.png")} />
            </div>
        </>
    );
}

export default Header;
