import { UPDATE_USERLIST } from "../consts";

const initialState = []

const userlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERLIST:
       return action.payload;
    default:
      return state;
  }
}

export default userlistReducer;