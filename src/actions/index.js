import * as types from '../constants/ActionTypes';

export const populateTableList = tables => ({
  type: types.TABLE_LIST,
  tables,
});

export const removeTable = id => ({
  type: types.REMOVE_TABLE,
  id,
});

export const tableRemoved = id => ({
  type: types.TABLE_REMOVED,
  id,
});

export const tableAdded = (afterId, id, name, participants) => ({
  type: types.TABLE_ADDED,
  afterId,
  id,
  name,
  participants,
});

export const tableUpdated = (id, name, participants) => ({
  type: types.TABLE_UPDATED,
  id,
  name,
  participants,
});
