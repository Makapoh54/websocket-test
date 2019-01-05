import * as types from '../constants/ActionTypes';

const tables = (state = [], action) => {
  const { id, name, participants, afterId, tables } = action;
  switch (action.type) {
    case types.TABLE_LIST:
      return [...tables];
    case types.REMOVE_TABLE:
    case types.TABLE_REMOVED:
      return state.filter(table => {
        return table.id !== action.id;
      });
    case types.TABLE_ADDED:
      const prevTableArrayIndex =
        afterId === -1 ? 0 : state.findIndex(({ id: prevTableId }) => prevTableId === afterId);
      state.splice(prevTableArrayIndex, 0, {
        id,
        name,
        participants,
      });
      return [...state];
    case types.TABLE_UPDATED:
      return state.map(oldTable => {
        return oldTable.id === id ? oldTable : { id, name, participants };
      });
    default:
      return state;
  }
};

export default tables;
