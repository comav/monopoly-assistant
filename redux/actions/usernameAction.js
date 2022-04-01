import { CHANGE_USERNAME } from "../consts"

export const changeUsername = username => (
  {
    type: CHANGE_USERNAME,
    payload: username,
  }
)