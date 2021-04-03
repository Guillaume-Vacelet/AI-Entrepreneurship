import {ADD_ITEM, EDIT_ITEM_TITLE, EDIT_ITEM_IMAGE, REMOVE_ITEM, EDIT_ITEM_PRICE} from '../constants/itemActionTypes'

let base_images_path = '../../../assets/items_images/';

const initialState = {
  items: [
		{ id: 1, title: 'Fruits', parent_id: 0, image : require(base_images_path + 'fruits_image.jpg'), price: null },
    { id: 2, title: 'Legumes', parent_id: 0, image : require(base_images_path + 'vegetables_image.jpg'), price: null },
    { id: 3, title: 'Boissons', parent_id: 0, image : require(base_images_path + 'drinks_image.jpg'), price: null },
    { id: 4, title: 'Viandes', parent_id: 0, image : require(base_images_path + 'meats_image.jpg'), price: null },
    { id: 5, title: 'Pomme', parent_id: 1, image : require(base_images_path + 'apple.jpg'), price: 0.5 },
    { id: 6, title: 'Pastèque', parent_id: 1, image : require(base_images_path + 'watermelon.jpg'), price: 2.0 },
    { id: 7, title: 'Peche', parent_id: 1, image : require(base_images_path + 'peach.jpg'), price: 0.5 },
    { id: 8, title: 'Mangue', parent_id: 1, image : null, price: 1 },
    { id: 9, title: 'Broccoli', parent_id: 2, image : null, price: 1.0 },
    { id: 10, title: 'Haricots', parent_id: 2, image : null, price: 2.0 },
    { id: 11, title: 'Sodas', parent_id: 3, image : null, price: null },
    { id: 12, title: 'Jus de fruits', parent_id: 3, image : null, price: null },
    { id: 13, title: 'Alcools', parent_id: 3, image : null, price: null },
    { id: 14, title: 'Boeuf', parent_id: 4, image : null, price: null },
    { id: 15, title: 'Volaille', parent_id: 4, image : null, price: null },
    { id: 16, title: 'Poissons', parent_id: 4, image : null, price: null }, 
    { id: 17, title: 'Sardines', parent_id: 15, image : null, price: 1 },
	]
};

// const initialState = {
//   items: [
// 		{ id: 0, title: 'Fruits', image: require(base_images_path + 'fruits_image.jpg'), price: null,
// 			children: [
// 				{ id: 4, title: 'Pomme', image: require(base_images_path + 'apple.jpg'), price: 0.5, children: [] },
// 				{ id: 5, title: 'Pastèque', image: require(base_images_path + 'watermelon.jpg'), price: 2.0, children: [] },
// 				{ id: 6, title: 'Peche', image: require(base_images_path + 'peach.jpg'), price: 0.5, children: [] },
// 				{ id: 7, title: 'Mangue', image: null, price: 1, children: [] }
// 			]
// 		},
//     { id: 1, title: 'Legumes', image: require(base_images_path + 'vegetables_image.jpg'), price: null,
// 			children: [
// 				{ id: 8, title: 'Broccoli', image: null, price: 1.0, children: [] },
// 				{ id: 9, title: 'Haricots', image: null, price: 2.0, children: [] },
// 			]
// 		},
//     { id: 2, title: 'Boissons', image: require(base_images_path + 'drinks_image.jpg'), price: null,
// 			children: [
// 				{ id: 10, title: 'Sodas', image: null, price: null, children: [] },
// 				{ id: 11, title: 'Jus de fruits', image: null, price: null, children: [] },
// 				{ id: 12, title: 'Alcools', image: null, price: null, children: [] }
// 			]
// 		},
//     { id: 3, title: 'Viandes', image: require(base_images_path + 'meats_image.jpg'), price: null,
// 			children: [
// 				{ id: 13, title: 'Boeuf', image: null, price: null, children: [] },
// 				{ id: 14, title: 'Volaille', image: null, price: null, children: [] },
// 				{ id: 15, title: 'Poissons', image: null, price: null, 
// 					children: [
// 						{ id: 16, title: 'Sardines', image: null, price: 1, children: [] }
// 					]
// 				}
// 			]
// 		},
// 	]
// };

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM: {
			// let id = action.payload.id;
			return {
				...state,
				items: [...state.items, action.payload]
				// items: {...state.items, [id]: action.payload}
			};
    }
		case EDIT_ITEM_TITLE: {
			// return Object.assign({}, state, {
			// 	items: state.items.map(item => {
			// 		if (item.id !== action.payload.id) {
			// 			return item;
			// 		}
			// 		return Object.assign({}, item, {
			// 			title: action.payload.title
			// 		})
			// 	})
			// })

			const index = state.items.findIndex(item => item.id !== action.payload.id);
			const newItems = [...state.items];
			newItems[index].title = action.payload.title;

			return {
				...state,
				items: newItems
			}
		}
		case EDIT_ITEM_PRICE: {
			const index = state.items.findIndex(item => item.id !== action.payload.id);
			const newItems = [...state.items];
			newItems[index].title = action.payload.price;

			return {
				...state,
				items: newItems
			}
		}
    case EDIT_ITEM_IMAGE: {
			const index = state.items.findIndex(item => item.id !== action.payload.id);
			const newItems = [...state.items];
			newItems[index].image = action.payload.image;

			return {
				...state,
				items: newItems
			}
		}
    case REMOVE_ITEM: {
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload) 
			}
		}
		default:
			return state
	}
}