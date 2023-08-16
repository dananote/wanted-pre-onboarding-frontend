import React, { useEffect } from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) navigate("/todo");
  }, []);
  return (
    <div>
      <h1>회원가입</h1>
      <Form page="signup" />
    </div>
  );
};

export default SignUp;
