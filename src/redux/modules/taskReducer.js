import { v4 as uuidv4 } from "uuid";
// 초기 상태 정의
const initialState = [
  {
    id: uuidv4(),
    title: "Write down your todo",
    body: "your todo",
    isDone: false,
  },
];

// 액션 타입 정의
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const CANCEL_TASK = "CANCEL_TASK";

//addTask 가 들어왔을때 내가 하고싶은 행동?
//addTask 가 들어왔을때 payload에 객체를 받아온다.
// 그 객체는 newTask .. 들이 모인 객체..  새로운 할일.  업데이트 하고싶다. 합치고싶다.
//기존에 task 에 합쳐요. [{},{}] 객체를 나열하는 배열.
//나는 addTask 란 type 이 들어왔을때 새롭게 받은 객체를 배열에 추가 !
//> 할일을 update

// 액션 크리에이터 정의
export const addTask = (newTask) => ({
  type: ADD_TASK,
  payload: newTask, //내가 작업할때 문자열, 객체, 배열인지 뭔지 모르겠지? newTask는 객체
});
export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  payload: id,
});
export const cancelTask = (id) => ({
  type: CANCEL_TASK,
  payload: id,
});

// 리듀서 정의
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // 액션 타입에 따른 상태 변경 로직 작성
    case ADD_TASK: //추가  reducer 함수 안에서 switch 문을 쓰고 return 을 주면
      //이 return 값이 바로 state가 된다. 재할당.안해도.. switch 문에선 바로 state 가 변경된다.
      return [
        //기존 state는 객체를 담은 배열로 내가만들었다. 내가하고싶은건 배열안에 객체넣는거다.
        //...state는 내가가진 구조를 벗겨내는 spread
        //...state 는 객체들 (state라는 배열을 벗겨서 기존의 데이타도 날리지않고 추가하게끔)
        action.payload,
        ...state,
      ];
    //let a = [1,2,3,4]
    //...a = 1,2,3,4
    case REMOVE_TASK: //삭제하려면 내가 누른할일의 id 값이 내 배열에 없으면 된다.
      return state.filter((task) => task.id !== action.payload);
    case COMPLETE_TASK: //완료
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              isDone: true,
            }
          : task
      );
    //가장 마지막 동일한 key 값의 value 만 쳐준다.
    // 그래서 객체의 업데이트 할때 ...task 해줘서. 동일하게 넣어도 가장 마지막에 key 값만

    case CANCEL_TASK: //취소
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              isDone: false,
            }
          : task
      );
    default:
      return state;
  }
};

export default taskReducer;
