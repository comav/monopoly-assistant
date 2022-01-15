import {combineReducers} from "redux";

const usernameState = {
  username: 'some person'
}

const usernameReducer = (state = usernameState, action) => {
  console.log("Action: ", action);
  switch (action.type) {
    case 'change_username':
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}

const cardDataState = {
  cardData: {}
}

const cardDataReducer = (state = cardDataState, action) => {
  switch (action.type) {
    case 'update_data':
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}

const ipState = {
  ip: '192.168.0.103'
}

const ipReducer = (state = ipState, action) => {
  switch (action.type) {
    case 'update_ip':
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}

const userlistState = {
  userlist: []
}

const userlistReducer = (state = userlistState, action) => {
  switch (action.type) {
    case 'update_userlist':
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default combineReducers({
  username: usernameReducer,
  cardData: cardDataReducer,
  ip: ipReducer,
  userlist: userlistReducer,
})