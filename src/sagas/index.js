import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleRemoveTable = function* handleRemoveTable(params) {
  yield takeEvery(types.REMOVE_TABLE, action => {
    console.log('Request: ', JSON.stringify({ id: action.id, $type: action.type }));
    params.socket.send(JSON.stringify({ id: action.id, $type: action.type }));
  });
};

export default handleRemoveTable;
