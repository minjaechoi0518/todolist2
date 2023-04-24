import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { addTask } from "../redux/modules/taskReducer";
import { v4 as uuidv4 } from "uuid";
import { inputTitle } from "../redux/modules/inputTitleReducer";
import { inputBody } from "../redux/modules/inputBodyReducer";
import { useNavigate } from "react-router-dom";
import { resetBody } from "../redux/modules/inputBodyReducer";
import { resetTitle } from "../redux/modules/inputTitleReducer";
import styled from "styled-components";

const TaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const taskList = useSelector((state) => state.task);
  const title = useSelector((store) => store.inputTitle);
  const body = useSelector((store) => store.inputBody);
  //저장소를 가져오는 것은 그 스토어의 디폴트 값을 가져오는거다.

  const titleChangeHandler = (e) => {
    dispatch(inputTitle(e));
  };
  const bodyChangeHandler = (e) => {
    dispatch(inputBody(e));
  };

  const buttonForAdd = () => {
    if (title.length > 0 && body.length > 0) {
      const newTask = {
        id: uuidv4(),
        title: title,
        body: body,
        isDone: false,
      };
      dispatch(addTask(newTask));
      dispatch({
        type: "SET_TASK_DATA",
        payload: { name: "title", value: "" },
      });
      dispatch({
        type: "SET_TASK_DATA",
        payload: { name: "body", value: "" },
      });

      // 인풋값 초기화하기
      dispatch(resetTitle());
      dispatch(resetBody());
    }
  };

  return (
    <StApp className="App">
      <StHead className="head clearfix">
        <h1>My Todo List</h1>
        <h2>React</h2>
      </StHead>

      <StConMain className="con_main">
        제 목
        <input
          name="title"
          onChange={titleChangeHandler}
          className="titleBox"
          value={title}
        ></input>
        내 용
        <input
          name="body"
          onChange={bodyChangeHandler}
          className="titleBox"
          value={body}
        ></input>
        <StFirstBtn onClick={buttonForAdd} className="buttonForAdd btnFirst">
          추가하기
        </StFirstBtn>
      </StConMain>
    </StApp>
  );
};

export default TaskForm;

const StHead = styled.div`
  height: 50px;
  background-color: rgb(212, 213, 214);
  line-height: 50px;
  color: white;
`;

const StApp = styled.div`
  max-width: 1200px;
  min-width: 800px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  margin: 0 auto;
`;

const StConMain = styled.div`
  background-color: rgb(173, 176, 181);
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  padding: 0px 20px 0px 20px;
  font-size: 20px;
`;

const StFirstBtn = styled.button`
  font-size: 17px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 11px;
  padding: 4px 10px 3px 10px;
  margin: 5px;
  background-color: rgb(255, 255, 255);
  color: rgb(148, 148, 148);
  overflow: visible;
  cursor: pointer;
  &:hover {
    background-color: #1fa836;
  }
`;
