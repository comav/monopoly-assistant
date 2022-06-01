import { FETCH_USER_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from "../consts";

const initialState = {
  number: '0000 0000 0000 0000',
  network: "loadingNet",
  design: 0,
  balance: 0
}

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST: 
      return {
        ...state,
        loading: true,
        isError: false
      }
    
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isError: false
      }

    case FETCH_USER_DATA_FAILURE:
      return {
        isError: true,
        message: action.payload
      }

    default:
      return state;
  }
}

export default userDataReducer;