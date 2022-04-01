import { DEBUG_MENU_VISIBLE } from "../consts";

export const showDebug = debug => (
  {
    type: DEBUG_MENU_VISIBLE,
    payload: debug
  }
)