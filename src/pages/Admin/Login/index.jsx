import "./style.css";
import { Link } from "react-router-dom";
import MainButton from "../../../components/Admin/MainButton";

// Creator : Team e - chanan
function Login() {
  const onSubmit = (e) => {
    return e.preventDefault();
  };

  return (
    <>
      <div className="all-login">
        <div className="image">
          <img
            className="image 1"
            src={require("./image 1.png")}
            alt="image 1"
          />
          <img
            className="image 2"
            src={require("./image 2.png")}
            alt="image 2"
          />
        </div>
        <h1>Welcome back!</h1>
        </div>
        <div className="login-box">
          <div className="login-outbox"></div>
          <div className="login-inbox">
            <form onSubmit={onSubmit}>
              <label name="email">Email id</label>
              <input type="text" name="email" /> <br />
              <input type="password" name="password" placeholder="Password" />
              <Link className="forgot-password" to="/password">
                {" "}
                <br />
                Forgot Password?
              </Link>
              <MainButton>Sine in</MainButton>
            </form>
          </div>
        </div>
      
    </>
  );
}

export default Login;
