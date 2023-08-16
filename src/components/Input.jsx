import React from "react";
import { styled } from "styled-components";

const Input = ({
  children,
  type,
  placeholder,
  data,
  onChange,
  errorMessage,
}) => {
  return (
    <InputWrap errorMessage={errorMessage}>
      <label for={type}>{children}</label>
      <input
        type={type ? type : "email"}
        id={type}
        placeholder={placeholder}
        data-testid={data}
        onChange={onChange}
      ></input>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrap>
  );
};

const InputWrap = styled.div`
  input {
    border: ${(props) =>
      props.errorMessage ? "1px solid red" : "1px solid #d0d0d0;"};
    border-radius: 4px;
    padding: 8px 16px;
    width: 100%;
    margin-top: 8px;
    font-size: 16px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export default Input;
