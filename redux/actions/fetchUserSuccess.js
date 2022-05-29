import { FETCH_USER_DATA_SUCCESS } from "../consts";

export const fetchUserSuccess = (data) => (
  {
    type: FETCH_USER_DATA_SUCCESS,
    payload: data
  }
)