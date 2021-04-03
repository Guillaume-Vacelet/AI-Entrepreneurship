import {ADD_ITEM, EDIT_ITEM_TITLE, EDIT_ITEM_IMAGE, REMOVE_ITEM} from '../constants/itemActionTypes'

let itemID = 17;

export const addItem = (title, parent_id, image, price) => ({
	type: ADD_ITEM,
	payload: {
		id: ++itemID,
		title: title,
		parent_id: parent_id,
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

export const editItemPrice = (id, newPrice) => ({
	type: EDIT_ITEM_PRICE,
	payload: {
		id: id,
		newPrice: newPrice
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
	payload: item.id
	// payload: {[item.id]: item}
})