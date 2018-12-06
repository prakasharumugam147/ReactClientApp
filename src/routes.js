import React,{Component} from 'react';
import createBrowserHistory  from 'history/createBrowserHistory';
import { Router, Route,Switch } from "react-router-dom";
import LoginComponent from './components/loginComponent/LoginComponent';
import FormComponent from './components/formComponent/FormComponent';
import DashBoard from './components/dashboard/DashBoard';
import Header from './components/header/header';

const customHistory = createBrowserHistory();

class Routes extends React.Component {
  render() {
      return (
        <Router history={customHistory}>
          <Switch>
          <Route exact path="/" component={LoginComponent} />
            <Route exact path="/login" component={LoginComponent} />
            <Route path="/newentry" component={FormComponent} />
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </Router>
      )
  }
}

export default Routes;