import { CHANGE_USERNAME } from "../consts";

const initialState = {
  username: 'Player'
}

const usernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return action.payload;
    default:
      return state;
  }
}

export default usernameReducer;