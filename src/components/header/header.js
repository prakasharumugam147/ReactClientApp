import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logOutAction} from '../../actions';
import logo from '../../assests/img/mphasis_logo.png';
import Footer from '../footer/footer'
import Routes from '../../routes';
import './header.css';

class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="root-level">
        <div className="header">
          <img src={logo} width="200" height="65"/> 
        {this.props.isAuthenticated && <button className="btn btn-danger logout" onClick={this.props.logOutAction}>Log Out</button> }   
        </div>
        <div className="main">
          <Routes/>
        </div>
      <Footer/>
      </div>
    )
  }
};

const mapStateToProps =(state)=>{
  return {
      isAuthenticated:state.loginreducer.isAuthenticated
  }
}

function mapDispatchToProps(dispatch,ownprops){
  return {
    logOutAction:bindActionCreators(logOutAction,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);