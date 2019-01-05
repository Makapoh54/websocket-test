import * as types from '../constants/ActionTypes';
import { populateTableList, tableRemoved, tableAdded, tableUpdated } from '../actions';

const setupSocket = dispatch => {
  const socket = new WebSocket('wss://test-address//');

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        $type: types.LOGIN,
        username: 'username',
        password: 'password',
      }),
    );
  };

  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    console.log('Response: ', data);
    switch (data.$type) {
      case types.LOGIN_SUCCESSFULL:
        socket.send(
          JSON.stringify({
            $type: types.SUBSCRIBE_TABLES,
          }),
        );
        break;
      case types.TABLE_LIST:
        dispatch(populateTableList(data.tables));
        break;
      case types.TABLE_ADDED:
        dispatch(tableAdded(data.after_id, data.table.id, data.table.name, data.table.participants));
        break;
      case types.TABLE_REMOVED:
        dispatch(tableRemoved(data.id));
        break;
      case types.TABLE_UPDATED:
        dispatch(tableUpdated(data.table.id, data.table.name, data.table.participants));
        break;
      case types.REMOVAL_FAILED:
        // TODO it is not performant to retrieve whole list
        // Optimise this behaviour
        socket.send(
          JSON.stringify({
            $type: types.SUBSCRIBE_TABLES,
          }),
        );
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
