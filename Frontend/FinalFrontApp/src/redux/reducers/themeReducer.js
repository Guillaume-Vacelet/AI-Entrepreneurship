import { CHANGE_THEME_COLOR } from '../constants/themeActionTypes'

const initialState = {
  themeColor: "#fb8500"
}

export default function(state = initialState, action) {
	switch (action.type) {
    case CHANGE_THEME_COLOR:
      return {
				...state,
        themeColor: action.payload.color
			};
    default:
      return state;
  }
}