export const getChildrenFromParentID = (store, id) =>
  store.items.filter(item => item.parent_id == id);

export const getItemsFromTitle = (store, title) =>
  store.items.filter(item => item.title == title);