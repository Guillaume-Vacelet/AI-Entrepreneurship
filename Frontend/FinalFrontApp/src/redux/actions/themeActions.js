import { CHANGE_THEME_COLOR } from '../constants/themeActionTypes'

export const changeThemeColor = (color) => ({
	type: CHANGE_THEME_COLOR,
	payload: {
		color : color
	},
})