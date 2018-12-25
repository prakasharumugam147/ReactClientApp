import axios from 'axios';
export const IS_LOGIN='IS_LOGIN';
export const IS_LOGOUT='IS_LOGOUT';

const loginAsync=(res)=>{
  return{
      type:IS_LOGIN,
      payload:res.data
  }
}
export const login=(username,password)=>{
  return async dispatch=>{
    await axios.post('http://localhost:4000/login',{
        employeeid:parseInt(username),
        password:password
    }).then((response)=>{
      console.log('action',response);
      dispatch(loginAsync(response))
      //if(response.data.loginsuccess){this.props.history.push({pathname:'/newentry',state:response.data})}else{alert('wrong user entry')};
    })
    .catch((error)=>{
      return error;
    });
  }
}

export const logOutAction=()=>{
    return{
        type:IS_LOGOUT,
        payload:false
    }
}