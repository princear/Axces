import ReduxThunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux'
 
// import SeasonReducer from '../reducers/SeasonReducer';

import reducers from '../Reducers'




const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;