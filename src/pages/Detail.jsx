import React from "react";
import { Link } from "react-router-dom";
import { data } from "../shared/data";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Detail() {
  // 내가 이동한 URL 주소 가져오기
  const params = useParams();
  const navigate = useNavigate();
  // tasks 내용(task와 내가 이동한 URL(id) 일치한(find) 항목을 task에 넣기
  const tasks = useSelector((state) => state.task);

  const task = tasks.find((item) => {
    return item.id === params.id;
  });

  // 본인의 todo의 id === 눌러진 todo의 id (현제 이 페이지의 id)

  return (
    <StDetail>
      <StCardBox>
        <p>id: {task.id}</p>
        <h2>{task.title}</h2>
        <p>{task.body}</p>
        <StFirstBtn
          onClick={() => {
            navigate("/");
          }}
        >
          돌아가기
        </StFirstBtn>
      </StCardBox>
    </StDetail>
  );
}

export default Detail;

const StDetail = styled.div`
  /* display: flex; */
  height: 100%;
  width: 100%;
`;

const StCardBox = styled.div`
  display: relative;
  border: 1.5px solid #bababa;
  border-radius: 15px;
  width: 550px;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 350px;
  text-align: center;
`;

const StFirstBtn = styled.button`
  font-size: 14px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 11px;
  padding: 4px 10px 3px 10px;
  margin: 5px;
  background-color: rgb(193, 193, 193);
  color: rgb(105, 105, 105);
  overflow: visible;
  cursor: pointer;
  &:hover {
    background-color: #0db368;
  }
`;
