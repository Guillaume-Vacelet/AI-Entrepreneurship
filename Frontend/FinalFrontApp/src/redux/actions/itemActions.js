import {ADD_ITEM, EDIT_ITEM_TITLE, EDIT_ITEM_IMAGE, REMOVE_ITEM} from '../constants/itemActionTypes'

let itemID = 6;

export const addItem = (title, image, price) => ({
	type: ADD_ITEM,
	payload: {
		id: ++itemID,
		title: title,
		image: image,
		price: price,
		children: []
	},
})

export const editItemTitle = (id, newTitle) => ({
	type: EDIT_ITEM_TITLE,
	payload: {
		id: id,
		newTitle: newTitle
	}
})

export const editItemImage = (id, newImage) => ({
	type: EDIT_ITEM_IMAGE,
	payload: {
		id: id,
		newImage: newImage
	}
})

export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: {[item.id]: item}
})