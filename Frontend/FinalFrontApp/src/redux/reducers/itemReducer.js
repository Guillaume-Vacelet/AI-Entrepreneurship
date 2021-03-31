import {ADD_ITEM, EDIT_ITEM_TITLE, EDIT_ITEM_IMAGE, REMOVE_ITEM} from '../constants/itemActionTypes'

// let base_images_path = '../../../assets/items_images/';

const initialState = {
  items: {
		0: { id: 0, title: 'Fruits', image: 'fruits_image.jpg' },
    1: { id: 1, title: 'Legumes', image: 'vegetables_image.jpg' },
    2: { id: 2, title: 'Boissons', image: 'drinks_image.jpg' },
    3: { id: 3, title: 'Viandes', image: 'meats_image.jpg' },

		// 20: { title: 'Fruits', image: require(base_images_path + 'fruits_image.jpg') },
    // 21: { title: 'Legumes', image: require(base_images_path + 'vegetables_image.jpg') },
    // 22: { title: 'Boissons', image: require(base_images_path + 'drinks_image.jpg') },
    // 23: { title: 'Viandes', image: require(base_images_path + 'meats_image.jpg') }
	}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM: {
			let id = action.payload.id;
			return {
				...state,
				items: {...state.items, [id]: action.payload}
			};
    }
		case EDIT_ITEM_TITLE: {
			let id = action.payload.id;
			return {
				...state,
				[id]: {...state[id], title: action.payload.title}
			};
		}
    case EDIT_ITEM_IMAGE: {
			let id = action.payload.id;
			return {
				...state,
				[id]: {...state[id], image: action.payload.image}
			};
		}
    case REMOVE_ITEM: {
			console.log(action.payload)
			let newState = Object.keys(state.items).reduce((newItemsArray, id) => {
				if (!action.payload[id]) {
					console.log(id)
					newItemsArray[id] = state.items[id];
				}
				return newItemsArray
			}, {})
			// console.log(newState)
			return {
				...state, 
				items: newState
			}
		}
		default:
			return state
	}
}