import '../constants/FavoriteActionsTypes'

const favoriteToggler = (state = NOT_FAV, action) => {
	switch (action.type) {
    
		case ADD_FAVORITE:
			return action.id

    case REMOVE_FAVORITE:
			return action.id

		default:
			return state
	}
}

export default favoriteToggler