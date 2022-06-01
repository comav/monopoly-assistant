import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import axios from 'axios';

import { fetchUserRequest } from './actions/fetchUserRequest';
import { fetchUserSuccess } from "./actions/fetchUserSuccess";
import { fetchUserFailure } from "./actions/fetchUserFailure";

//import cardDataReducer from "./reducers/carddataReducer";
import ownershipDataReducer from "./reducers/ownershipDataReducer";
import userlistReducer from "./reducers/userlistReducer";
import usernameReducer from "./reducers/usernameReducer";
import ipReducer from "./reducers/ipReducer";
import debugMenuReducer from "./reducers/debugMenuReducer";
import userDataReducer from "./reducers/userDataReducer";

const fetchUser = () => {
  return function(dispatch, getState) {
    state = getState();
    dispatch(fetchUserRequest())
    axios.get(`http://${state.ip.ip}:5502/getCardInfo?owner=${state.username.username}`)
      .then(res => {
        dispatch(fetchUserSuccess(res.data));
        console.log('this shit actually worked')
      })
      .catch(e => {
        console.error('Thunk error:', e.message);
        dispatch(fetchUserFailure(e.message));
      })
  }
}

const store = () => createStore(combineReducers({
  username: usernameReducer,
  cardData: userDataReducer,
  ip: ipReducer,
  userlist: userlistReducer,
  ownershipData: ownershipDataReducer,
  debug: debugMenuReducer,
}), applyMiddleware(thunkMiddleware))

export default store;