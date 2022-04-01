import { UPDATE_CARD_DATA } from "../consts";

const initialState = {
    number: '0000 0000 0000 0000',
    network: "loadingNet",
    design: 0,
    balance: 0
}

const cardDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CARD_DATA:
       return {...state, ...action.payload}
    default:
      return state;
  }
}

export default cardDataReducer;