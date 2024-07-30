import { combineReducers } from 'redux';
import todos from './todos';
import photos from './photos';

const rootReducer = combineReducers({
  todos,
  photos
});

export default rootReducer;
