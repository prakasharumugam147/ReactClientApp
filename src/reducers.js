import { combineReducers } from 'redux';
import { IS_LOGIN } from './actions';

const initialState={
  isAutheticated:false,name:"",employeeid:""
}
const loginreducer=(state=initialState,action)=>{
  switch(action.type){
   case IS_LOGIN:
   console.log('login reducer ',action.payload)
    return Object.assign({},state,{isAuthenticated:action.payload.loginsuccess,name:action.payload.state.name,
    employeeid:action.payload.state.employeeid});
   default:
    return state;
  }
}

const rootReducer=combineReducers({loginreducer});

export default rootReducer;