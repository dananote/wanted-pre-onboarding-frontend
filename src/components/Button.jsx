import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = ({ type, children }) => {
  const navigate = useNavigate();
  const handleStart = () => {
    console.log("dmdld");
    navigate("/signin");
  };

  return (
    <ButtonWrap onClick={handleStart} type={type ? "button" : "submit"}>
      {children}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button``;

export default Button;
