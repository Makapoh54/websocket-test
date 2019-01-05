import { combineReducers } from 'redux';
import tables from './tables';

const gamesStatus = combineReducers({
  tables,
});

export default gamesStatus;
