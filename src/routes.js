import React,{Component} from 'react';
import createBrowserHistory  from 'history/createBrowserHistory';
import { Router, Route,Switch,Redirect } from "react-router-dom";
import LoginComponent from './components/loginComponent/LoginComponent';
import FormComponent from './components/formComponent/FormComponent';
import DashBoard from './components/dashboard/DashBoard';
import Header from './components/header/header';
import {connect} from 'react-redux'
const customHistory = createBrowserHistory();

class Routes extends React.Component {
auth(){
    return <Redirect to="/newentry"/>
  
}
  render() {
    const {isAuthenticated}=this.props.login;
      return (
        <Router history={customHistory}>
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/login" component={LoginComponent} />
            <Route path="/newentry" component={FormComponent} />}
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </Router>
      )
  }
}

const mapStateToProps=(state)=>{
  console.log('login component ',state)
  return{
    login:state.loginreducer
  }
}

export default connect(mapStateToProps,null)(Routes);