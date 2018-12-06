import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './LoginComponent.css';

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={employeeid:null,password:null}
        this.onSubmit=this.onSubmit.bind(this);
    }

  onSubmit(e){
    e.preventDefault();
    const logindetails=axios.post('http://localhost:3000/login',{
        employeeid:parseInt(this.state.employeeid),
        password:this.state.password
    }).then((response)=>{
      console.log(response);
      if(response.data.loginsuccess){this.props.history.push({pathname:'/newentry',state:response.data})}else{alert('wrong user entry')};
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  getValue=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  render(){
    return(
    <div className="container">
    <div className="row">
        <div className="col-md-4 col-md-offset-7">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-lock"></span> Login
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" role="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label forName="nokp" className="col-sm-3 control-label">
                            Emp ID:</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="employeeid" name="employeeid" placeholder="enter employee id" onChange={this.getValue} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label forName="nopend" className="col-sm-3 control-label">
                            Password</label>
                        <div className="col-sm-9">
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={this.getValue} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-9">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/>
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group last">
                        <div className="col-sm-offset-3 col-sm-9">
                            <input type="submit" className="col-sm-9 btn btn-danger btn-sm" value="Sign in"/>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default withRouter(LoginComponent);