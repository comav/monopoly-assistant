import { DEBUG_MENU_VISIBLE } from "../consts";

const initialState = false;

const debugMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEBUG_MENU_VISIBLE:
      return action.payload;
    default:
      return state;
  }
}

export default debugMenuReducer;