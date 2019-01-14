import React,{Component} from 'react';
import axios from 'axios';
import {withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CourseComponent from '../courseComponent/CourseComponent';
import './FormComponent.css';

 class Form extends Component{

    constructor(props){
        super(props);
        this.state={recommend:'l2',showBox:true,interviewDate:new Date()};
    }

    ChangeHandler=(e)=>{
        this.setState({recommend:e.target.value});
    }

    showInfo =(isShow)=>{
        this.setState({showBox:isShow});
    }

    setValue=(e)=>{
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value});
    }

    bindValue=(e)=>{
        let name=e.target.name;
        this.setState({[e.target.name]:e.target.value});
    }

    getRating=(rating)=>{
        this.setState({[rating.name]:rating.value});
    }

    handleChange=(date)=> {
        this.setState({
          interviewDate: date
        });
      }

    submitData=(data)=>{
    if(this.state.applicantname && this.state.position && this.state.spocname
       && this.state.forms && this.state.newfeatures && this.state.graphics &&
      this.state.htmlmedia && this.state.geolocation && this.state.cssconcepts
      && this.state.csssprites && this.state.cssadvanced && this.state.cssresponsive
      && this.state.cssreference && this.state.cssreference &&
      this.state.jsbasicpart1 && this.state.jsbasicpart2 && this.state.jsbasicpart3 && 
      this.state.jsdomevent && this.state.jsbrowser && this.state.jsjson && this.state.advancejspart1 &&
      this.state.advancejspart2 && this.state.advancejspattern && this.state.jsprototype 
      && this.state.angularpart1 && this.state.angularpart2 && this.state.this.state.angularpart3
      && this.state.angularpart4 && this.state.angularadvance && this.state.angulartesting
      && this.state.techcomppattern && this.state.techcompnfr && this.state.buildtools
      && this.state.sdlc && this.state.repository){    
        axios.post('http://localhost:4000/feedback',  {
        emp_name:this.props.name,
        emp_number:this.props.employeeid,
        applicantname:this.state.applicantname,
        position:this.state.position,
        spocname:this.state.spocname,
        rating:{
           html:{
              forms:this.state.forms,
              newfeatures:this.state.newfeatures,
              graphics:this.state.graphics,
              htmlmedia:this.state.htmlmedia,
              geolocation:this.state.geolocation
           },
           css:{
            cssconcepts:this.state.cssconcepts,
            csssprites:this.state.csssprites,
            cssadvanced:this.state.cssadvanced,
            cssresponsive:this.state.cssresponsive,
            cssreference:this.state.cssreference
           },
           javascript:{
            jsbasicpart1:this.state.jsbasicpart1,
            jsbasicpart2:this.state.jsbasicpart2,
            jsbasicpart3:this.state.jsbasicpart3,
            jsdomevent:this.state.jsdomevent,
            jsbrowser:this.state.jsbrowser,
            jsjson:this.state.jsjson
           },
           advancejs:{
            advancejspart1:this.state.advancejspart1,
            advancejspart2:this.state.advancejspart2,
            advancejspart3:this.state.advancejspattern,
            jsprototype:this.state.jsprototype
           },
           angularjs:{
            angularpart1:this.state.angularpart1,
            angularpart2:this.state.angularpart2,
            angularpart3:this.state.angularpart3,
            angularpart4:this.state.angularpart4,
            angularadvance:this.state.angularadvance,
            angulartesting:this.state.angulartesting
           },
           techcomp:{
            techcomppattern:this.state.techcomppattern,
            techcomptesting:this.state.techcomptesting,
            techcompnfr:this.state.techcompnfr
           },
           processtools:{
            buildtools:this.state.buildtools,
            sdlc:this.state.sdlc,
            repository:this.state.repository
           }
        },
        comment:this.state.comments,
        recommendation:this.state.recommend,
        interviewdate:this.state.interviewDate,
        status:data
    }).then((response)=>{
        if(response.status===200){alert("inserted succesfully");this.props.history.push('/dashboard')}else{alert("not sucessful")}
    })
    .catch((error)=>{
        console.log(error);
    })
} else{
    alert("please enter values for all fields")
}
    }



render(){
    const { name,employeeid }=this.props;
    return (!this.props.isAuthenticated) ?
    <Redirect to="/login"/>
    :
    (
    <div className="container">
        <h4>Candidate Evaluation Form</h4>
        <form className="form-horizontal" role="form" onSubmit={this.onSubmit}>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="emp_name">Employee Name:</label>
                <div className="col-sm-8">
                    <input type="text" disabled className="form-control" value={name} id="emp_name" placeholder="Employee Name" name="emp_name" onBlur={this.setValue}/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="emp_number">Employee Number:</label>
                <div className="col-sm-8">          
                    <input type="text" disabled className="form-control" value={employeeid} id="emp_number" placeholder="Employee Number" name="emp_number" onBlur={this.setValue}/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="applicantname">Applicant Name:</label>
                <div className="col-sm-8">          
                    <input type="text" className="form-control" id="app_name" placeholder="Applicant Name" name="applicantname" onBlur={this.setValue} required/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="applicantname">Interview Date:</label>
                <div className="col-sm-8">          
                <DatePicker className="form-control" selected={this.state.interviewDate} onChange={this.handleChange} required/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="position">Position:</label>
                <div className="col-sm-8">          
                    <input type="text" className="form-control" id="position" placeholder="Position" name="position" onBlur={this.setValue} required/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="spocname">HR Spoc Name:</label>
                <div className="col-sm-8">          
                    <input type="text" className="form-control" id="spoc_name" placeholder="Spoc Name" name="spocname" onBlur={this.setValue} required/>
                </div>
            </div>
            <div className="col-sm-12">
                <label htmlFor="infobox">InfoBox</label>
                {this.state.showBox ?  (<div><div className="infobox col-sm-12">
                    <h4>Rating Scale:</h4>
                    <div className="col-sm-6">5. Outstanding</div>
                    <div className="col-sm-6">4.Excellent-exceeds Requirement</div>
                    <div className="col-sm-6">3. Competant Acceptable Proficiency</div>
                    <div className="col-sm-6">2. Below Average-Does not meet Requirementss</div>
                    <div className="col-sm-6">1. Unable to determine or not applicable for this candidate</div>
                </div><div onClick={()=>this.showInfo(false)}>Hide</div></div>):<div onClick={()=>this.showInfo(true)}>show</div>}
            </div>
            <CourseComponent getRating={this.getRating}/>
            <div className="form-group col-sm-6">
                <label htmlFor="comment" className="col-sm-2">Comment:</label>
                <textarea className="form-control col-sm-6" rows="3" name="comments" id="comment" onBlur={this.setValue}></textarea>
            </div>
            <div className="form-group col-sm-12">
                <label htmlFor="recommend" className="col-sm-2">Recommendation:</label>
                <label className="radio-inline col-sm-2">
                    <input type="radio" name="recommend" value="l1" checked={this.state.recommend==="l1"} onChange={this.ChangeHandler}/>L1 Selected
                </label>
                <label className="radio-inline col-sm-2">
                    <input type="radio" name="recommend" value="l2" checked={this.state.recommend==="l2"} onChange={this.ChangeHandler}/>L2 Selected
                </label>
            </div>
            <div className="form-group col-sm-12">
                <input type="button"  onClick={()=>this.submitData('Selected')} className="btn btn-success col-xs-12 col-sm-2" value="Selected"/>
                <input type="button" onClick={()=>this.submitData('rejected')} className="btn btn-danger col-xs-12 col-sm-offset-1 col-sm-2" value="Rejected"/>
            </div>
            </form>
  </div>
    );
}
}

const FormComponent=withRouter(Form);

const mapStateToProps =(state)=>{
    return {
        name:state.loginreducer.name,
        employeeid:state.loginreducer.employeeid,
        isAuthenticated:state.loginreducer.isAuthenticated
    }
}

export default connect(mapStateToProps,null)(FormComponent);