import {combineReducers} from 'redux';
import EquipmentReducer from '../Reducers/EquipmentReducer';
import BookmarkReducer from '../Reducers/BookmarkReducer'
import WorkoutReducer from '../Reducers/WorkoutReducer';
export default combineReducers({
    EquipmentReducer,
    BookmarkReducer,
    WorkoutReducer
    //CartItems,
    //SeasonReducer,
   // UserReducer
  
});
