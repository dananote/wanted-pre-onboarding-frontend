import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SignIn = () => {
  return (
    <div>
      <h1>로그인</h1>
      <Form page="signin" />
      <SignUpButton to="/signup">회원가입 하기</SignUpButton>
    </div>
  );
};

const SignUpButton = styled(Link)`
  display: block;
  width: 100%;
  color: #a8a8a8;
  text-align: center;
  margin-top: 24px;
`;

export default SignIn;
