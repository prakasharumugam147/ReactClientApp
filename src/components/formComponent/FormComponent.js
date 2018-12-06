import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CourseComponent from '../CourseComponent';
import './FormComponent.css';

 class FormComponent extends Component{

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
        axios.post('http://localhost:3000/feedback',  {
        emp_name:"prakash",
        emp_number:"34783743",
        applicantname:this.state.applicantname,
        position:this.state.position,
        spocname:this.state.spocname,
        rating:{
          angular:this.state.angular,
          javascript:this.state.javascript,
          html:this.state.html,
          css:this.state.css,
          testingtool:this.state.testingtool,
          subversion:this.state.subversion
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
    }



render(){
    const { name,employeeid }=this.props.history.location.state.state;
    console.log(this.props.history.location.state);
    return (
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
            <div className="form-group col-sm-12">
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
                <input type="button" onClick={()=>this.this.submitData('rejected')} className="btn btn-danger col-xs-12 col-sm-offset-1 col-sm-2" value="Rejected"/>
            </div>
            </form>
  </div>
    );
}
}

export default withRouter(FormComponent);