import { UPDATE_OWNERSHIP_DATA } from "../consts";

const initialState = {
  ownershipData: {}
}

const ownershipDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_OWNERSHIP_DATA:
       return action.payload;
       
    default:
      return state;
  }
}

export default ownershipDataReducer;