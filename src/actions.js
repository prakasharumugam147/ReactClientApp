import axios from 'axios';
export const IS_LOGIN='IS_LOGIN';

export default function login(username,password){
  const login=axios.post('http://localhost:3000/login',{
        employeeid:parseInt(username),
        password:password
    }).then((response)=>{
      console.log(response.data);
      return response.data
      //if(response.data.loginsuccess){this.props.history.push({pathname:'/newentry',state:response.data})}else{alert('wrong user entry')};
    })
    .catch((error)=>{
      return error;
    });
  return {
    type:IS_LOGIN,
    payload:{isAuthenticated:login.loginsuccess}
  }
}