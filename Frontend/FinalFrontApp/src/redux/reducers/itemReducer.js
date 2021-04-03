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

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM: {
			return {
				...state,
				items: [...state.items, action.payload]
			};
    }
		case EDIT_ITEM_TITLE: {
			const index = state.items.findIndex(item => item.id === action.payload.id);
			const newItems = [...state.items];
			newItems[index].title = action.payload.newTitle;

			return {
				...state,
				items: newItems
			}
		}
		case EDIT_ITEM_PRICE: {
			const index = state.items.findIndex(item => item.id === action.payload.id);
			const newItems = [...state.items];
			newItems[index].price = action.payload.newPrice;

			return {
				...state,
				items: newItems
			}
		}
    case EDIT_ITEM_IMAGE: {
			const index = state.items.findIndex(item => item.id === action.payload.id);
			const newItems = [...state.items];
			newItems[index].image = action.payload.newImage;

			return {
				...state,
				items: newItems
			}
		}
    case REMOVE_ITEM: {
			return {
				...state,
				items: state.items.filter(item => {
					(item.id !== action.payload.id) && (item.parent_id !== action.payload.id)
				})
			}
		}
		default:
			return state
	}
}