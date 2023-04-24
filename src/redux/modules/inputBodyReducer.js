//inputBodyReducer.js
const initialState = "";

const INPUT_BODY = "INPUT_BODY";
const RESET_BODY = "RESET_BODY";

export const inputBody = (e) => {
  return { type: INPUT_BODY, payload: e.target.value };
};
export const resetBody = () => {
  return { type: RESET_BODY };
};

//reducer
const inputBodyReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_BODY:
      return action.payload;
    case RESET_BODY:
      return initialState;
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default inputBodyReducer;
