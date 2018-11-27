import React,{Component} from 'react';
import CourseComponent from './CourseComponent';
import '../css/FormComponent.css';

export default class FormComponent extends Component{

    constructor(props){
        super(props);
        this.state={recommend:'r'};
    }

    ChangeHandler=(e)=>{
        this.setState({recommend:e.target.value});
    }

render(){
    return (
    <div className="container">
        <h4>Candidate Evaluation Form(Responsive Design)</h4>
        <form className="form-inline">
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="emp_name">Employee Name:</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="emp_name" placeholder="Employee Name" name="emp_name"/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="emp_number">Employee Number:</label>
                <div className="col-sm-8">          
                    <input type="text" className="form-control" id="emp_number" placeholder="Employee Number" name="emp_number"/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="app_name">Applicant Name:</label>
                <div className="col-sm-8">          
                    <input type="text" className="form-control" id="app_name" placeholder="Applicant Name" name="app_name"/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="position">position:</label>
                <div className="col-sm-8">          
                    <input type="text" className="form-control" id="position" placeholder="Position" name="position"/>
                </div>
            </div>
            <div className="form-inline form-space col-sm-6">
                <label className="col-sm-4" htmlFor="spoc_name">HR Spoc Name:</label>
                <div className="col-sm-8">          
                    <input type="text" className="form-control" id="spoc_name" placeholder="Spoc Name" name="spoc_name"/>
                </div>
            </div>
            <div className="col-sm-12">
                <label htmlFor="infobox">InfoBox</label>
                <div className="infobox col-sm-12">
                    <h4>Rating Scale:</h4>
                    <div className="col-sm-6">5. Outstanding</div>
                    <div className="col-sm-6">4.Excellent-exceeds Requirement</div>
                    <div className="col-sm-6">3. Competant Acceptable Proficiency</div>
                    <div className="col-sm-6">2. Below Average-Does not meet Requirementss</div>
                    <div className="col-sm-6">1. Unable to determine or not applicable for this candidate</div>
                </div>
            </div>
            <CourseComponent />
            <div className="form-group col-sm-12">
                <label htmlFor="comment">Comment:</label>
                <textarea className="form-control col-sm-6" rows="3" id="comment"></textarea>
            </div>
            <div className="form-group col-sm-12">
                <label htmlFor="recommend">Recommendation:</label>
                <label className="radio-inline col-sm-3">
                    <input type="radio" name="recommend" value="l1" checked={this.state.recommend==="l1"} onChange={this.ChangeHandler}/>L1 Selected
                </label>
                <label className="radio-inline col-sm-3">
                    <input type="radio" name="recommend" value="l2" checked={this.state.recommend==="l2"} onChange={this.ChangeHandler}/>L2 Selected
                </label>
                <label className="radio-inline col-sm-3">
                    <input type="radio" name="recommend" value="r" checked={this.state.recommend==="r"} onChange={this.ChangeHandler}/>Reject
                </label>
            </div>
            <div className="col-sm-12">
                <button type="button" className="btn btn-primary col-sm-2">Submit</button>
                <button type="button" className="btn btn-danger col-sm-offset-1 col-sm-2">Cancel</button>
            </div>
    </form>
  </div>
    );
}
}