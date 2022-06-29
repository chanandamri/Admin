import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../../components/Admin/MainButton";
import { useContext } from "react";
import { userContext } from "../../../context/Admin/User";
import React from "react";

// Creator : Team e - chanan
function Login() {

  const {user, setUser} = useContext(userContext)

  const Navigation = useNavigate()
  const users =[
    {userType: "teacher",
      email: "teacher@gmail.com",
      password:"teacher",
      classrooms:["a","b"]
    },
    {userType: "admin",
      email: "admin@gmail.com",
      password:"admin",
      teachers:["dany","moshe"]
    }
  ]

  const validation = (email, password) => {
    let userTecher = users.find((v)=>(email===(v.email) && password===(v.password) && "teacher"===(v.userType)))
    let userAdmin = users.find((v)=>(email===(v.email) && password===(v.password) && "admin"===(v.userType)))
    // let userCheck = users.find((v)=>(email===(v.email) && password===(v.password)))
    if (userTecher){
      Navigation("/classrooms")
      setUser(userTecher);
    }
    else if (userAdmin){
      Navigation("/admin")
    }
    else {
      console.log("no permission");
    }
  }

  const onSubmit = (e) => {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      validation(email, password)
      

    return(
        <>
        {/* {console.log(email)}
        {console.log(password)} */}
        </>
    )
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
