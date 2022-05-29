import { FETCH_USER_DATA_FAILURE } from "../consts";

export const fetchUserFailure = (error) => (
  {
    type: FETCH_USER_DATA_FAILURE,
    payload: error
  }
)