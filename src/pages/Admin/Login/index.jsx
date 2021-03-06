import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../../components/Admin/MainButton";
import { useContext } from "react";
import { userContext } from "../../../context/Admin/User";
import Input from "../../../components/Admin/Input";

// Creator : Team e - chanan
function Login() {
  const { user, setUser } = useContext(userContext);

  const Navigation = useNavigate();
  const users = [
    {
      firstName: "moshe",
      lastName: "levi",
      email: "teacher@gmail.com",
      password: "teacher",
      permissions: "teacher",
    },
    {
      firstName: "yosi",
      lastName: "sade",
      email: "admin@gmail.com",
      password: "admin",
      permissions: "admin",
    },
  ];

  const validation = (email, password) => {
    let userTecher = users.find(
      (v) =>
        email === v.email &&
        password === v.password &&
        "teacher" === v.permissions
    );
    let userAdmin = users.find(
      (v) =>
        email === v.email &&
        password === v.password &&
        "admin" === v.permissions
    );
    // let userCheck = users.find((v)=>(email===(v.email) && password===(v.password)))
    if (userTecher) {
      Navigation("/classrooms");
      setUser(userTecher);
    } else if (userAdmin) {
      Navigation("/admin");
      setUser(userAdmin);
    } else {
      alert("no permission");
    }

    safeLocalStoreg(user);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    validation(email, password);
  };

  const safeLocalStoreg = (user) => {
    console.log(user);
  };

  return (
    <div className="login-container">
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
            <Input
              name={"email"}
              type={"text"}
              legend={"Email"}
              valid={"yes"}
            />
            <Input
              name={"password"}
              type={"password"}
              legend={"Password"}
              valid={"yes"}
            />
            <Link className="forgot-password" to="/password">
              {" "}
              <br />
              Forgot Password?
            </Link>
            <MainButton>Sing in</MainButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
