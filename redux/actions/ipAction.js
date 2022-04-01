import { CHANGE_IP } from "../consts"

export const changeIP = ip => (
  {
    type: CHANGE_IP,
    payload: ip,
  }
)