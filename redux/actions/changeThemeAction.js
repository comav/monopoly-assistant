import { THEME_CHANGE } from "../consts";

export const changeTheme = theme => (
  {
    type: THEME_CHANGE,
    payload: theme
  }
)