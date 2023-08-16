import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleStart = (e) => {
    if (e.target.innerText === "로그인") {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  };

  return (
    <LandingLayout>
      <h1 className="a11yHidden">랜딩 페이지</h1>
      <Button type="button" onClick={handleStart}>
        로그인
      </Button>
      <Button type="button" color="gray" onClick={handleStart}>
        회원가입
      </Button>
    </LandingLayout>
  );
};

const LandingLayout = styled.section`
  button + button {
    margin-top: 24px;
  }
`;
export default Landing;
