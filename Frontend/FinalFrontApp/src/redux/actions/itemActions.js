import {ADD_ITEM, EDIT_ITEM_TITLE, EDIT_ITEM_PRICE, EDIT_ITEM_IMAGE, REMOVE_ITEM} from '../constants/itemActionTypes'

let itemID = 17;

export const addItem = (title, parentID, image) => ({
	type: ADD_ITEM,
	payload: {
		id: ++itemID,
		title: title,
		parent_id: parentID,
		image: image,
		price: null,
		children: []
	},
})

export const editItemTitle = (itemID, newTitle) => ({
	type: EDIT_ITEM_TITLE,
	payload: {
		id: itemID,
		newTitle: newTitle
	}
})

export const editItemPrice = (itemID, newPrice) => ({
	type: EDIT_ITEM_PRICE,
	payload: {
		id: itemID,
		newPrice: newPrice
	}
})

export const editItemImage = (itemID, newImage) => ({
	type: EDIT_ITEM_IMAGE,
	payload: {
		id: itemID,
		newImage: newImage
	}
})

export const removeItem = (itemID) => ({
	type: REMOVE_ITEM,
	payload: itemID
})