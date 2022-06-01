import { THEME_CHANGE } from "../consts";

import { DefaultTheme } from "react-native-paper";

const initialState = {
  mode: 'dark',
  materialTheme: {
    ...DefaultTheme,
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  }
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload
      }
    default:
      return state;
  }
}

export default themeReducer;