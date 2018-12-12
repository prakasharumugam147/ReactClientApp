import { combineReducers } from 'redux';
import { IS_LOGIN,IS_LOGOUT } from './actions';

const initialState={
  isAutheticated:false,name:"",employeeid:""
}
const loginreducer=(state=initialState,action)=>{
  switch(action.type){
   case IS_LOGIN:
    return Object.assign({},state,{isAuthenticated:action.payload.loginsuccess,name:action.payload.state.name,
    employeeid:action.payload.state.employeeid});
   case IS_LOGOUT:
    return Object.assign({},state,{isAuthenticated:action.payload});
   default:
    return state;
  }
}

const rootReducer=combineReducers({loginreducer});

export default rootReducer;