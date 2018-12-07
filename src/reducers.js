import { IS_LOGIN } from './actions';
import { combineReducers } from 'redux';

const loginreducer=(state={},action)=>{
  switch(action.type){
   case IS_LOGIN:
    return Object.assign({},state,{isAutheticated:action.payload});
   default:
    return state;
  }
}

const rootReducer=combineReducers({loginreducer});

export default rootReducer;