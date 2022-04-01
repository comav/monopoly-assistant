import {combineReducers, createStore} from "redux";

import cardDataReducer from "./reducers/carddataReducer";
import ownershipDataReducer from "./reducers/ownershipDataReducer";
import userlistReducer from "./reducers/userlistReducer";
import usernameReducer from "./reducers/usernameReducer";
import ipReducer from "./reducers/ipReducer";
import debugMenuReducer from "./reducers/debugMenuReducer";

const store = () => createStore(combineReducers({
  username: usernameReducer,
  cardData: cardDataReducer,
  ip: ipReducer,
  userlist: userlistReducer,
  ownershipData: ownershipDataReducer,
  debug: debugMenuReducer,
}))

export default store;