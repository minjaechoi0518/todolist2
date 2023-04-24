import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import {
  cancelTask,
  completeTask,
  removeTask,
} from "../redux/modules/taskReducer";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TaskList = () => {
  const dispatch = useDispatch();
  //taskList 가 배열이지? store에서 배열로 가꼬와찌? 그래서 return에서 map filter 쓸수있는거
  const taskList = useSelector((store) => store.task);

  const buttonForRemove = (id) => {
    dispatch(removeTask(id));
  };

  const buttonForComplete = (id) => {
    dispatch(completeTask(id));
  };

  const buttonForCancel = (id) => {
    dispatch(cancelTask(id));
  };

  return (
    <StConList className="con_list">
      <StListTitle className="listTitle">Working Zone</StListTitle>
      {taskList
        .filter((item) => !item.isDone) //filter가 반환하는거 배열 //item은객체 .
        .map((item) => {
          //item.isDone이 false.
          return (
            <StConTodo className="con_todo" key={item.id}>
              {/* 리액트 라우터 Link추가 */}
              <StDetailButton to={`/detail/${item.id}`}>
                상세보기
              </StDetailButton>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <div className="button-Set">
                <StFirstBtn
                  onClick={() => buttonForComplete(item.id)}
                  className="buttonForComplete btnFirst"
                >
                  완료하기
                </StFirstBtn>
                <StFirstBtn
                  onClick={() => buttonForRemove(item.id)}
                  className="btnRemove btnFirst"
                >
                  삭제하기
                </StFirstBtn>
              </div>
            </StConTodo>
          );
        })}
      <StListTitle className="listTitle">Done Zone</StListTitle>
      <StConList className="con_list">
        {taskList
          .filter((item) => item.isDone)
          .map((item) => {
            return (
              <StConTodo className="con_todo" key={item.id}>
                <StDetailButton to={`/detail/${item.id}`}>
                  상세보기
                </StDetailButton>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <div className="button-Set">
                  <StFirstBtn
                    onClick={() => buttonForCancel(item.id)}
                    className="buttonForCancle btnFirst"
                  >
                    취소하기
                  </StFirstBtn>
                  <StFirstBtn
                    onClick={() => buttonForRemove(item.id)}
                    className="btnRemove btnFirst "
                  >
                    삭제하기
                  </StFirstBtn>
                </div>
              </StConTodo>
            );
          })}
      </StConList>
    </StConList>
  );
};

export default TaskList;

const StConList = styled.div`
  background-color: #ffffff;
  max-width: 1200px;
  min-width: 800px;
  text-align: center;
  margin: 0 auto;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: stretch; */
`;

const StConTodo = styled.div`
  margin: 0px;
  background-color: rgb(205, 212, 229);
`;

const StListTitle = styled.div`
  max-width: 1200px;
  min-width: 800px;
  text-align: center;
  margin: 0 auto;
  height: 50px;
  background-color: #ffffff;
  line-height: 50px;
  text-align: start;
  padding: 0px 0px 0px 10px;
  font-size: 20px;
  font-weight: 700;
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
    background-color: #0db368;
  }
`;

const StDetailButton = styled(Link)`
  font-size: 12px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 11px;
  padding: 4px 10px 3px 10px;
  margin: 0px;
  color: rgb(105, 104, 104);
  overflow: visible;
  cursor: pointer;
`;
