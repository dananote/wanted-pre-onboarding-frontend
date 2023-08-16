import React from "react";
import { styled, css } from "styled-components";

const Button = ({ type, children, color, onClick }) => {
  return (
    <ButtonWrap
      type={type ? "button" : "submit"}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button`
  width: 100%;
  padding: 16px 12px;
  background-color: #3165ff;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: #4977ff;
  }

  &:disabled {
    background-color: #bfcfff;
  }

  ${(props) =>
    props.color &&
    css`
      background-color: #f3f3f3;
      color: black;

      &:hover {
        background-color: #ebebeb;
      }
    `}
`;

export default Button;
