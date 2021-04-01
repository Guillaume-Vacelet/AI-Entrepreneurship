import {ADD_ITEM, EDIT_ITEM_TITLE, EDIT_ITEM_IMAGE, REMOVE_ITEM} from '../constants/itemActionTypes'

let base_images_path = '../../../assets/items_images/';

const initialState = {
  items: {
		0: { id: 0, title: 'Fruits', image: require(base_images_path + 'fruits_image.jpg'), price: null,
			children: {
				0: { id: 0, title: 'Pomme', image: null, price: 0.5, children: [] },
				1: { id: 1, title: 'Pastèque', image: null, price: 2, children: [] },
				2: { id: 2, title: 'Peche', image: null, price: 0.5, children: [] }
			}
		},
    1: { id: 1, title: 'Legumes', image: require(base_images_path + 'vegetables_image.jpg'), price: null,
			children: {
				0: { id: 0, title: 'Broccoli', image: null, price: 1, children: [] },
				1: { id: 1, title: 'Haricots', image: null, price: 2, children: [] },
			}
		},
    2: { id: 2, title: 'Boissons', image: require(base_images_path + 'drinks_image.jpg'), price: null,
			children: {
				0: { id: 0, title: 'Sodas', image: null, price: null, children: [] },
				1: { id: 1, title: 'Jus de fruits', image: null, price: null, children: [] },
				2: { id: 2, title: 'Alcools', image: null, price: null, children: [] }
			},
		},
    3: { id: 3, title: 'Viandes', image: require(base_images_path + 'meats_image.jpg'), price: null,
		children: {
			0: { id: 0, title: 'Boeuf', image: null, price: null, children: [] },
			1: { id: 1, title: 'Volaille', image: null, price: null, children: [] },
			2: { id: 2, title: 'Poissons', image: null, price: null, children: [] }
		},
	},
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
				items: {
					...state.items, 
					[id]: {...state.items[id], title: action.payload.newTitle}
				}
				// [id]: {...state[id], title: action.payload.newTitle}
			};
		}
    case EDIT_ITEM_IMAGE: {
			let id = action.payload.id;
			return {
				...state,
				items: {
					...state.items, 
					[id]: {...state.items[id], image: action.payload.image}
				}
				// [id]: {...state[id], image: action.payload.image}
			};
		}
    case REMOVE_ITEM: {
			console.log(action.payload);

			let newState = Object.keys(state.items).reduce((newItemsArray, id) => {
				if (!action.payload[id]) {
					newItemsArray[id] = state.items[id];
				}
				return newItemsArray
			}, {})
			return {
				...state, 
				items: newState
			}
		}
		default:
			return state
	}
}