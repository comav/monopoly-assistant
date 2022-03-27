import { UPDATE_USERLIST } from "../consts"

export const updateUserlist = userlist => (
  {
    type: UPDATE_USERLIST,
    payload: userlist,
  }
)