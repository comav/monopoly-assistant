import { CHANGE_IP } from "../consts";

const initialState = {
  ip: '192.168.0.100'
}

const ipReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IP:
       return action.payload;
       
    default:
      return state;
  }
}

export default ipReducer;