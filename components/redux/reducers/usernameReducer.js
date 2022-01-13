import {combineReducers} from "redux";

const initialState = {
  username: 'some person'
}

const usernameReducer = (state = initialState, action) => {
  console.log("Action: ", action);
  switch (action.type) {
    case 'change_username':
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default combineReducers({
  username: usernameReducer
})