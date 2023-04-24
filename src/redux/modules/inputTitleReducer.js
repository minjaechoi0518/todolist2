const initialState = "";

const INPUT_TITLE = "INPUT_TITLE";
const RESET_TITLE = "RESET_TITLE";

//action creator , set title 은 함수. // action 객체를 반환하는 함수.
export const inputTitle = (e) => {
  return { type: INPUT_TITLE, payload: e.target.value };
};
export const resetTitle = () => {
  return { type: RESET_TITLE };
};

//reducer
const inputTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TITLE:
      return action.payload;
    case RESET_TITLE:
      return initialState;
    default:
      return state;
  }
};
export default inputTitleReducer;
