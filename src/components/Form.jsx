import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import Input from "./Input";
import instance from "../api/instance";
import { useNavigate } from "react-router-dom";

const Form = ({ page }) => {
  const navigate = useNavigate();
  const { PostInstance } = instance();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [eamilError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      eamilError === "" &&
      passwordError === "" &&
      userData.email !== "" &&
      userData.password !== ""
    ) {
      if (page === "signup") {
        PostInstance.post("/auth/signup", userData)
          .then((res) => {
            navigate("/signin");
          })
          .catch((error) => {
            console.log(error);
            setEmailError("이미 사용중인 이메일입니다");
          });
      } else if (page === "signin") {
        PostInstance.post("/auth/signin", userData)
          .then((res) => {
            window.localStorage.setItem("token", res.data.access_token);
            navigate("/todo");
          })
          .catch((error) => {
            console.log(error);
            setPasswordError("이메일 또는 비밀번호가 일치하지 않습니다");
          });
      }
    }
  };

  const handleError = () => {
    let regEmail = /@/;

    if (userData.email === "") {
      setEmailError("이메일을 입력해주세요");
    } else if (!regEmail.test(userData.email)) {
      setEmailError("정확한 이메일을 입력해주세요");
    } else {
      setEmailError("");
    }

    if (userData.password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    } else if (userData.password.length < 8) {
      setPasswordError("비밀번호를 8자 이상 입력해주세요");
    } else {
      setPasswordError("");
    }
  };

  const handleInput = (e) => {
    setEmailError("");
    setPasswordError("");
    const { type, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Input
        children="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        data="email-input"
        onChange={handleInput}
        errorMessage={eamilError}
      />
      <Input
        children="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        data="password-input"
        onChange={handleInput}
        errorMessage={passwordError}
      />
      <Button
        children={page === "signin" ? "로그인" : "회원가입"}
        onClick={handleError}
        data={page === "signin" ? "signin-button" : "signup-button"}
        disabled={
          eamilError === "" &&
          passwordError === "" &&
          userData.email !== "" &&
          userData.password !== ""
            ? false
            : true
        }
      />
    </FormWrap>
  );
};

const FormWrap = styled.form`
  div + div {
    margin-top: 24px;
  }

  button {
    margin-top: 32px;
  }
`;

export default Form;
