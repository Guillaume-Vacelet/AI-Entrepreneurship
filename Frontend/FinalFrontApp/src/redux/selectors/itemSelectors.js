export const getChildrenFromParentID = (store, id) =>
  store.items.filter(item => item.parent_id == id);