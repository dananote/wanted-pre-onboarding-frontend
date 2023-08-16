import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import instance from "../api/instance";

const Todo = () => {
  const navigate = useNavigate();
  const { GetInstance, PostInstance } = instance();
  const { todoData, setTodoData } = useState();
  const [isTodo, setIsTodo] = useState({
    todo: "",
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) navigate("/");
  }, []);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setIsTodo((prev) => ({
      ...prev,
      todo: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isTodo.todo === "") {
      PostInstance.post("/todos", isTodo)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(isTodo);

  return (
    <TodoLayout>
      <h1>To-do</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          id="todo"
          data-testid="new-todo-input"
          onChange={handleInput}
        />
        <button type="submit" data-testid="new-todo-add-button">
          등록
        </button>
      </form>
    </TodoLayout>
  );
};

const TodoLayout = styled.article`
  form {
    display: flex;
    gap: 12px;
  }
  input {
    border: ${(props) =>
      props.errorMessage ? "1px solid red" : "1px solid #d0d0d0;"};
    border-radius: 4px;
    padding: 16px 12px;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
  }

  button {
    width: 120px;
    padding: 16px 12px;
    background-color: #3165ff;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    transition: all 0.3s;
    box-sizing: border-box;

    &:hover {
      background-color: #4977ff;
    }

    &:disabled {
      background-color: #bfcfff;
    }
  }
`;

export default Todo;
