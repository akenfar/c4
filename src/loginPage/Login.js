import React, { useEffect, useState } from "react";
import "./login.css";
import { IoMdClose } from "react-icons/io";
import logo from "./image/logo.png";
import axios from 'axios';



const Login = () => {


  const [User, setUser] = useState({
    name: "",
    password: "",
  })

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const {name , value} = e.target
    setUser({ ...User, [name]: value});
  }
  console.log(User)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(User));
  }

  const Validation = (value) =>{
    const errors = {}
    const regexEmail =/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    if (!value.name) {
      errors.name = "email Required";
    } else if (!regexEmail.test(value.name)){
      errors.name = "email no valid";
    }

    if(!value.password){
      errors.password = "password Required";
    } else if(value.password.length < 8){
      errors.password = "password < 8 ";
    } else if(value.password.length > 12 ){
        errors.password = "password  > 12 ";
    } else if(!regexPass.test(value.password)){
      errors.password = " password include at least one Num and one special character!";
    }

    return errors
  }
const password=User.password;
const name=User.name;


  

  return (
    <div className="PageLogin">
      <div>
        <IoMdClose className="iconClose" />
      </div>

      <div className="combinelogin">
        <div className="icon ">
          <img className="Logo" src={logo} alt="logo" />
          <p className="c4u">C4U</p>
        </div>
        <div className="lineCombine"></div>
        <div className="formulaire">
          <form onSubmit={handleSubmit}>


            <input
              className="input"
              type="email"
              placeholder="Email@adress.com"
              value={User.name}
              name="name"
              onChange={handleChange}
            />
            <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p> 

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={User.password}
              name="password"
              onChange={handleChange}
            />
              <p style={{ color: "red", fontSize: "13px" }}> {errors.password} </p>


            <button
              type="submit"
              className="buttonsubmit"
            > 
            Login
            </button>

          </form>
          <a href="#" className="a">create account </a>
          {/* <Link to="/login"  className="a">create account </Link> */}

        </div>
      </div>
    </div>
  );
};

export default Login;
