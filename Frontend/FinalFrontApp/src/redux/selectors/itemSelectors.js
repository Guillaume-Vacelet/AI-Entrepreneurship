export const getItemsState = store => store.items;

export const getItemList = store =>
  getItemsState(store) ? getItemsState(store).items : {};

export const getItemById = (store, id) =>
  getItemsState(store) ? { ...getItemsState(store).items[id], id } : {};